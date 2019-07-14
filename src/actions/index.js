//right now it is just one fucntion, so it is stored as index
export const selectDoubleScreen = (state) => {
    console.log("Selected_Double_Screen");
    return {
        type: "Selected_Double_Screen",
        payload: ~state
    }
};