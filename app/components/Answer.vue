<template>
    <Page>
        <ActionBar padding="15">
            <GridLayout width="94%">
                <StackLayout orientation="horizontal"  horizontalAlignment="left" >
                    <!--<Image src="~/images/logo.png" width="25" height="25" verticalAlignment="center" marginRight="10"/>-->
                    <Image src="~/images/logo2.png" width="35" height="35" verticalAlignment="center" marginRight="0">
                    </Image>
                    <Label text="Add an Answer" fontSize="20" verticalAlignment="center" marginLeft="15" />

                </StackLayout>
                <StackLayout orientation="horizontal" horizontalAlignment="right" >
                    <!-- <Button text="Back" marginRight="15"
                    @tap="Back" style="width:65;height:40;border-width:1;border-color:Red;border-radius:10"/> -->
                    
                    <Image src="~/images/back.jpg" width="35" height="35" verticalAlignment="center" marginRight="15" @tap="Back"> </Image>
                    <!--<Button text="sign out" marginRight="15"
                    @tap="logout">
                    </Button>-->
                </StackLayout>
            </GridLayout>
        </ActionBar>
        <ScrollView>
            <StackLayout class="home-panel">
                <TextView loaded="textviewloaded" hint="Write your answer here" updateTextTrigger="textChanged" v-model="answer" editable="true" style=" height:300; border-width:1;border-color:Green;border-radius:10"/>
        
                <Button text="Answer" @tap="addAnswer" fontSize="15" marginTop="30" backgroundColor="#6DD0B4" style="width:100;height:40;border-width:1;border-color:Green;border-radius:10" />
            </StackLayout>
        </ScrollView>
    </Page>
</template>

<script>
    import Home from "./Home";
    import SingleQ from "./SingleQ";


    export default {
         data() {
            return {
                
                answer:""
            };
        },
        methods: {
            addAnswer(){
                if(this.answer == "" ){
                          alert({
                            title: "",
                            message: "Write somthing to answer",
                            okButtonText: "ok"
                            });
                }
                else{
                 this.$backendService
                    .addAnswer(this.answer)
                    .then(result => {
                        console.log("done"+ result)
                        // alert("Done");
                     alert({
                        title: "",
                        message: "Added Successfully",
                        okButtonText: "ok"
                        });

                        this.answer = "";
                    },error => {
                        console.log(error);
                    });
                }
            },
            Back() {
               this.$navigateTo(SingleQ, {
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