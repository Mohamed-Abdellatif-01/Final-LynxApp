<template >
    <Page >
          <ActionBar padding="15">
            <GridLayout width="94%">
                <StackLayout orientation="horizontal"  horizontalAlignment="left" >
 
                    <Image src="~/images/logo2.png" width="35" height="35" verticalAlignment="center" marginRight="0" >
                    </Image>
                    <!--<Image src="~/images/logo.png" width="25" height="25" verticalAlignment="center" marginRight="10"/>-->
                    <Label text="Question" fontSize="20" verticalAlignment="center" marginLeft="0" />

                </StackLayout>
                <StackLayout orientation="horizontal" horizontalAlignment="right" >
                    
                    <!-- <Button text="Ask?" fontSize="10" marginRight="15"
                    @tap="Ask" style="width:60;height:40;border-width:1;border-color:Green;border-radius:10"/> -->
                    <Image src="~/images/back.jpg" width="35" height="35" verticalAlignment="center" marginRight="15" @tap="Back"> </Image>
                    <!--<Button text="sign out" marginRight="15"
                    @tap="logout">
                    </Button>-->

                </StackLayout>
            </GridLayout>
           </ActionBar>
            <ScrollView>
                        

                    <StackLayout >
                            <Label color="Black" fontSize="25" marginLeft="5" marginTop="10" marginRight="5"  textWrap="true" :text="ques.title" 
                        fontWeight="bold" /> 
                        <Label textWrap="true" color="Black" marginTop="5" fontStyle="italic" marginLeft="190" >
                            <FormattedString>
                                <Span text="By: " />
                                <Span :text="ques.name" style="color: red" />
                            </FormattedString>
                        </Label>
                        <Label textWrap="true" color="Black" marginTop="5" fontStyle="italic" marginLeft="200" >
                            <FormattedString>
                                <Span text="Asked on: " />
                                <Span :text="ques.date" style="color: red" />
                            </FormattedString>
                        </Label>
                         
                        
                        <Label color="Black" fontSize="14" marginTop="15" marginLeft="5" marginRight="5"  textWrap="true" :text="ques.details" 
                        /> 
                <Button color="White" text="Answer" @tap="Answer" backgroundColor="Green" marginTop="20" fontSize="15"  style="width:100;height:40;border-width:1;border-color:White;border-radius:10"/>

                    <StackLayout class=""></StackLayout>
                    <StackLayout marginLeft="5" marginRight="5">
                        <RadListView   for="item in answers"   horizontalAlignment="center" separatorColor="transparent" marginTop="15" marginLeft="10" marginRight="10" >
                        <v-template>
                                <StackLayout orientation="vertical">
                                <GridLayout alignItems="center"  borderRadius="10"  v-shadow="2"> 
                                    <StackLayout  orientation="vertical" verticalAlignment="middle" 
                                        backgroundColor="#B3BDFF" style="border-radius:10" >
                                          <Label textWrap="true" marginTop="5" fontStyle="italic" marginLeft="160" >
                            <FormattedString>
                                <Span text="By: " />
                                <Span :text="item.owner.first_name+' '+item.owner.last_name" style="color: red" />
                            </FormattedString>
                        </Label>
                        <Label textWrap="true" marginTop="5" fontStyle="italic" marginLeft="160" >
                            <FormattedString>
                                <Span text="Asked on: " />
                                <Span :text="item.created_on" style="color: red" />
                            </FormattedString>
                        </Label>
                                        <Label textWrap="true" color="Black" :text="item.content" class=""
                                            marginLeft="15" fontSize="15" />
                                            
                     <Image :src="like" width="35" height="35" verticalAlignment="center"
                      marginRight="0"   > </Image>
                                     <Image :src="dislike" width="35" height="35" verticalAlignment="center"
                        > </Image>
                      
                                    </StackLayout>
                                    <!-- <Label :text="item.created_on" class=""
                                            marginRight="15" marginTop="15" horizontalAlignment="right" verticalAlignment="middle"/> -->
                                </GridLayout>
                                <StackLayout height="15" backgroundColor=""/>
                                </StackLayout>
                        </v-template>
                    </RadListView>  
                     </StackLayout>
            
            </StackLayout>
            
                  
            <!-- <StackLayout verticalAlignment="center">
               
                    <Label text="name" fontSize="20" verticalAlignment="center"  />
                    <Label text="7amada"  fontSize="20" verticalAlignment="center"  />

              
                
            </StackLayout> -->
            <!-- <AbsoluteLayout  class="home-panel" >
    <Image src="~/images/pp.jpg" left="88" top="0" width="200" height="200" verticalAlignment="center"  marginBottom="300" >
                    </Image>
                    <Label :text="name" left="135" top="200" fontSize="20" verticalAlignment="center" marginTop="40" />
                    <Label :text="joinedin" left="20" top="270" fontSize="20" verticalAlignment="center"  />

                <Button color="White" text="Logout" left="165" top="350" backgroundColor="Red" @tap="logout" />
  </AbsoluteLayout> -->
        </ScrollView>
        
    </Page>
</template>
<script>
    import Home from "./Home";
    import Answer from "./Answer";

const ObservableArray = require("tns-core-modules/data/observable-array").ObservableArray;
import RadListView from 'nativescript-ui-listview/vue';
const platformModule = require("tns-core-modules/platform");
    export default {
         data() {
            return {
                like:"~/images/beforelike.png",
                dislike:"~/images/dislike.png",
                ques: {
                    name:"",
                    date:"",
                    title:"",
                    details:"",
                    id:""
                },
                id: global.selected,
                answers: new ObservableArray(),
                test:["1","2","3"]
            };
        },
        mounted(){
            this.$backendService.SingleQ().then(result=>{
                // console.log("7amada");
                console.log(result);
                this.ques.title = result.title;
                this.ques.details = result.details;
                this.ques.name = result.owner.first_name +" "+ result.owner.last_name;
                var str   = result.created_on;
                var stringArray = str.split(" ");
                this.ques.date = stringArray[0];
                // console.log(this.ques);
            },error=>{
                console.log(error);
            });
             this.$backendService.Answers().then(result=>{
                // console.log("7amada");
                console.log(result);
                 this.answers =  new ObservableArray(result);
                // console.log(this.ques);
            },error=>{
                console.log(error);
            });
        },
        methods: {
            onPullToRefreshInitiated ({ object }) {
            console.log('Pulling...');
            this.$nextTick(() => {
                this.$backendService
                    .Answers()
                    .then(result => {
                        // console.log(" ----0---- " + result);
                       this.answers =  new ObservableArray(result);
                    },error => {
                        console.log(error);
                    });
                object.notifyPullToRefreshFinished();
            });
            },
            Answer(){
                 this.$navigateTo(Answer, {
                    clearHistory: true
                });
            },
            Back() {
               this.$navigateTo(Home, {
                    clearHistory: true
                });
            }
        },

       
    };
</script>