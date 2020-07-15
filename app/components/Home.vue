<template >
    <Page >
          <ActionBar padding="15">
            <GridLayout width="94%">
                <StackLayout orientation="horizontal"  horizontalAlignment="left" >
 
                    <Image src="~/images/logo2.png" width="35" height="35" verticalAlignment="center" marginRight="0" >
                    </Image>
                    <!--<Image src="~/images/logo.png" width="25" height="25" verticalAlignment="center" marginRight="10"/>-->
                    <Label :text="navbar" fontSize="20" verticalAlignment="center" marginLeft="0" />

                </StackLayout>
                <StackLayout orientation="horizontal" horizontalAlignment="right" >
                    <!-- <Button text="Ask?" fontSize="10" marginRight="15"
                    @tap="Ask" style="width:60;height:40;border-width:1;border-color:Green;border-radius:10"/> -->
                     <Image src="~/images/ask.png" width="35" height="35" verticalAlignment="center" marginRight="15" @tap="Ask"> </Image>
                    <Image src="~/images/profile.png" width="35" height="35" verticalAlignment="center" marginRight="15" @tap="Profile">
                    </Image>
                    <!--<Button text="sign out" marginRight="15"
                    @tap="logout">
                    </Button>-->
                </StackLayout>
            </GridLayout>
           </ActionBar>
         <RadListView  pullToRefresh="true" for="item in listofrequest" @itemTap="onItemTap" width="94%" horizontalAlignment="center" separatorColor="transparent" marginTop="30" @pullToRefreshInitiated="onPullToRefreshInitiated">
            <v-template>
                    <StackLayout orientation="vertical">
                    <GridLayout alignItems="center"  borderRadius="10"  v-shadow="2"> 
                        <StackLayout  orientation="vertical" verticalAlignment="middle" height="100"
                            backgroundColor="#B3BDFF" style="border-radius:10" >
                            <Label :text="item.title" class=""
                                marginLeft="15" fontSize="25" />
                            <Label :text="item.details" class=""
                                marginLeft="15" marginTop="15" />
                        </StackLayout>
                        <Label :text="item.created_on" class=""
                                marginRight="15" marginTop="15" horizontalAlignment="right" verticalAlignment="middle"/>
                    </GridLayout>
                     <StackLayout height="15" backgroundColor=""/>
                    </StackLayout>
            </v-template>
        </RadListView>
    </Page>
</template>

<script>
    import Login from "./Login";
    import Ask from "./Ask";
    import Profile from "./Profile";
    import SingleQ from "./SingleQ";



const ObservableArray = require("tns-core-modules/data/observable-array").ObservableArray;
import RadListView from 'nativescript-ui-listview/vue';
const platformModule = require("tns-core-modules/platform");


    export default {
        data() {
            return {
                listofrequest: new ObservableArray(),
                navbar: "Welcome "+ global.userData.user.first_name
            };
        },
        methods: {
            onPullToRefreshInitiated ({ object }) {
            console.log('Pulling...');
            this.$nextTick(() => {
                this.$backendService
                    .getRequests()
                    .then(result => {
                        // console.log(" ----0---- " + result);
                       this.listofrequest =  new ObservableArray(result);
                    },error => {
                        console.log(error);
                    });
                object.notifyPullToRefreshFinished();
            });
            },
            onItemTap: function({ item }) {
                // console.log(item.id);
                global.selected = item.id;
                this.$navigateTo(SingleQ, {
                    clearHistory: true
                    });

            },
            logout() {
                this.$backendService.logout();
                this.$navigateTo(Login, {
                    clearHistory: true
                });
            },
            Ask() {
                this.$navigateTo(Ask, {
                    clearHistory: true
                });
            },
             Profile() {
                this.$navigateTo(Profile, {
                    clearHistory: true
                });
            },
            stripHtml(str)
            {
                if ((str===null) || (str===''))
                    return false;
                else
                str = str.toString();
                return str.replace(/<[^>]*>/g, '');
            }
        },
        mounted(){
            this.$backendService
                    .getRequests()
                    .then(result => {
                        console.log(" ----0---- " + result);
                       this.listofrequest =  new ObservableArray(result);
                    },error => {
                        console.log(error);
                    });
        },
    };
</script>

<style>
</style>
