/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "localhost", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "", "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out, is "localhost"
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "en",
	timeFormat: 12,
	units: "imperial",

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: "calendar",
			header: "Upcoming Events",
			position: "top_left",
			config: {
				maximumNumberOfDays: 2,
				timeFormat: "absolute",
				calendars: [
					{
						symbol: "capsules",
						url: "https://calendar.google.com/calendar/ical/4blsfq93t34lgb6p3fepinn0p8%40group.calendar.google.com/private-a2f2f47a3f7e4eb68ae07ced95b58929/basic.ics"
					},
					{
						symbol: "flask",
						url: "https://calendar.google.com/calendar/ical/umich.edu_o5n6ltqobtrj9udm65mc9fpovg%40group.calendar.google.com/private-6682b72b7ccbef1dd5171208e9d98cd2/basic.ics"
					},
					{
						symbol: "user",
						url: "https://calendar.google.com/calendar/ical/jaschwa%40umich.edu/private-db123b95734afd6d6e666a6c5304c689/basic.ics"
					}
				]
			}
		},
		{
			module: "currentweather",
			position: "top_right",
			config: {
				onlyTemp: "true",
				degreeLabel: "true",
				locationID: "4984247",  //ID from http://www.openweathermap.org/help/city_list.txt
				appid: "3a43ae0d3b2fda1e069bbcc42ddc065a"
			}
		},
		{
			module: "weatherforecast",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				locationID: "4984247",  //ID from http://www.openweathermap.org/help/city_list.txt
				appid: "3a43ae0d3b2fda1e069bbcc42ddc065a"
			}
		},
		{
			module: 'MMM-MyCommute',
			position: 'bottom_right',
			config: {
			  apikey: 'AIzaSyB1uz1F2p9iFAGqFGwhVnT9B6f6X1xfQXE',
			  origin: '745 Packard Street, Ann Arbor, MI 48104',
			  startTime: '00:00',
			  endTime: '15:00',
			  hideDays: [0,6],
			  destinations: [
			    {
			      destination: 'North Campus Research Complex Building 18, Ann Arbor, MI 48105',
			      label: 'NCRC',
			      mode: 'driving'
			    },
			    {
			      destination: 'Simpson Circle Parking Structure, Ann Arbor, MI 48109',
			      label: 'University Hospital',
			      mode: 'driving'
			    }
			  ]
			  }
		},
		{
			module: "MMM-awesome-alexa",
			position: "bottom_bar",
			config: {
			    "wakeWord": "Alexa",
			    "clientId": "amzn1.application-oa2-client.5fe029bf65d943a5825406704c053c07",
			    "clientSecret": "e75f26b72a25121184db289308140aeab9eb68eb7e298798fedd66c03e1e5ef9",
			    "deviceId": "JakesMirror",
			    "refreshToken": "Atzr|IwEBIE6KAaLL62V7nFVep76rYy4s93k2RNRd8IJWCVsx3iiepDPNa4UzJ9bxONs1lbMv9HslJKq53CUuShQgvSOWV-u_UZ54u14XqmOkML7L9QFqNA9G7gwceEgxlZlxa2WUYwtFZ4zSBDwsNtkk7KfX8kRLCWDRUamSR0CCWtWOhKsI9D5AF5OrtEmm1f7cVc4QQp7TX49zQqtkDnBDSgYuBr14EHt_6QSqM2h0O4Vn5sCim4BFXHVqzX0LOMOHVUDE2fz-eaOmSlC5X601sNApGD76RSSifOpLTVRF-Xs2YQpj2nqelm48UZ0JR0RrH1yDtWkqTFirYnSan-0crjeZXlfJAbpjpcxhg2x-RusISORoiNRwz-ri2VnSQL2jAl-hVIeA_risvrc2PpYG6XeY9vsQhfTGDPruvYv9yKFoO2065WYYMhYvStPd-Mg8soYbs-dWdZbSyCg3ygK1Rv-iMsgLzPUMkWQobeiN0Z5IJgdGHKr_Ag47vqv4gfLARnsJyo-x3ds7jylzJRsXaQJRTIU5INY1lDYh4HgxbfCOsD-FJQ",
			    "lite": false,
			    "isSpeechVisualizationEnabled": false
			}
		},
		{
			module: 'MMM-WatchDog'
		}
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
