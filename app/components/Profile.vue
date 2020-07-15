<template>
    <Page>
        <ActionBar padding="15">
            <GridLayout width="94%">
                <StackLayout orientation="horizontal"  horizontalAlignment="left" >
                    <!--<Image src="~/images/logo.png" width="25" height="25" verticalAlignment="center" marginRight="10"/>-->
                    <Image src="~/images/logo2.png" width="35" height="35" verticalAlignment="center" marginRight="0" >
                    </Image>
                    <Label text="Profile" fontSize="20" verticalAlignment="center" marginLeft="15" />

                </StackLayout>
                <StackLayout orientation="horizontal" horizontalAlignment="right" >
                    <!-- <Button text="Back" marginRight="15"
                    @tap="Back" style="width:65;height:40;border-width:1;border-color:Red;border-radius:10" />
                     -->
                    <Image src="~/images/back.jpg" width="35" height="35" verticalAlignment="center" marginRight="15" @tap="Back"> </Image>
                    <!--<Button text="sign out" marginRight="15"
                    @tap="logout">
                    </Button>-->
                </StackLayout>
            </GridLayout>
        </ActionBar>
        <ScrollView>
            <StackLayout class="home-panel" >
               <Image style="width:160;height:160;border-width:4;border-color:Green;border-radius:100"  src="~/images/pp.jpg" width="200" height="200" verticalAlignment="center"  marginBottom="100" >
                    </Image>
                    <Label :text="name" fontSize="20" verticalAlignment="center"  />
                    <Label :text="joinedin"  fontSize="20" verticalAlignment="center"  />

                <Button color="White" text="Logout" backgroundColor="Red" @tap="logout" marginTop="150" fontSize="15"  style="width:100;height:40;border-width:1;border-color:White;border-radius:10"/>
                
            </StackLayout>
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
    import Login from "./Login";

    export default {
         data() {
            return {
               name:"Name: "+ global.userData.user.first_name+" "+global.userData.user.last_name,
               joinedin: "Email: "+global.userData.user.email

            };
        },
        methods: {
           logout() {
                this.$backendService.logout();
                this.$navigateTo(Login, {
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

<style scoped>

    .home-panel {
        vertical-align: center;
        font-size: 20;
        margin: 15;
    }

    .description-label {
        margin-bottom: 15;
    }
   
</style>