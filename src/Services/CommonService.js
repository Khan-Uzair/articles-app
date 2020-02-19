const CommonServices = {
    isFormValid(updatedForm) {
        let  isFormValid = true;

        for(let formInput in updatedForm) {
            if(!updatedForm[formInput].valid) {
                isFormValid = false;
            }
        }
        return isFormValid;
    }
}

export default CommonServices;