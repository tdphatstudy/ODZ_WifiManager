const execute = require('./execute');
const scripts = require('./scripts');


const caller = {
    get_profiles: (callback) => {
        execute(scripts.get_profiles, (profiles)=> {
            callback(profiles)
        }) 
        
    } 
}
const  handle = {
    get_profiles: async() => {
        return new Promise((resolve, reject) => {
            caller.get_profiles((profiles) => {
                let rs = profiles.split('\n');
                rs = rs.filter((value)=> {
                    if (value.indexOf('All User Profile') != -1) {
                        return value;
                    }
                })
                rs = rs.map((value)=> {
                    return value.split(":")[1].trim();
                })
                resolve(rs);
            });
          });
    }     
}

module.exports = handle