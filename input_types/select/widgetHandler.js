let handleConfig = {
    priceHandler : function(data, config){
        console.log('data',data);
        console.log("stuff", config.pricing.value);
        return config.pricing.value[data.value];
    },
    validator : function(data, config){
        if(config.value.indexOf(data.value) < 0){
            return "Selected value: " + data.value + " not a valid choice"
        }
        return true;
    }
}

module.exports = handleConfig;