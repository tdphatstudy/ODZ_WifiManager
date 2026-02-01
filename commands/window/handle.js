const execute = require('./execute');
const scripts = require('./scripts');

const handle = {
  get_profiles: async () => {
    try {
      const profiles = await execute(scripts.get_profiles);
      let rs = profiles.split('\n');
      rs = rs.filter((value) => {
        return value.indexOf('All User Profile') != -1;
      });
      rs = rs.map((value) => {
        return value.split(":")[1].trim();
      });
      return rs;
    } catch (error) {
      console.error("Error getting profiles:", error);
      return [];
    }
  },
  get_detail: async (ssid) => {
    try {
      const detail = await execute(scripts.detail_profiles(ssid));
      let rs = detail.split('\n');
      // Filter lines that contain ':' but NOT 'All User Profile'
      rs = rs.filter((index) => {
        return index.indexOf(':') != -1 && index.indexOf('All User Profile') === -1;
      });
      rs = rs.map((index) => {
        const parts = index.split(':');
        const key = parts[0].trim();
        // Join the rest back in case value contains ':'
        const value = parts.slice(1).join(':').trim();
        return { key: key, value: value };
      });
      return rs;
    } catch (error) {
      console.error(`Error getting details for ${ssid}:`, error);
      return [];
    }
  }
}

module.exports = handle;