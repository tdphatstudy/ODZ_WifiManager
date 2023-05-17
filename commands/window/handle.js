const execute = require('./execute');
const scripts = require('./scripts');


const caller = {
    get_profiles: (callback) => {
        execute(scripts.get_profiles, (profiles)=> {
            callback(profiles)
        }) 
    } ,
    get_detail: (ssid, callback) => {
        execute(scripts.detail_profiles(ssid), (detail) => {
            callback(detail);
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
    } ,
    get_detail: async(ssid) => {
        return new Promise((resolve, reject) =>{
            caller.get_detail(ssid, (detail) => {
                let rs = detail.split('\n');
                rs = rs.filter((index) => {
                    if (index.indexOf(':') != -1 && index.indexOf('All User Profile') === -1 ) {
                        return rs;
                    }
                })
                rs = rs.map((index) => {
                    const key = index.split(':')[0].trim();
                    const value = index.split(':')[1].trim();
                    return {key: key, value: value};
                })
                resolve(rs);
            })
        })
        
    }   
}

module.exports = handle