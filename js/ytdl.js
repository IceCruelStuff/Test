function getInfo(videoId) {
    var data = {
        "context": {
            "client": {
                "hl": "en",
                "clientName": "WEB",
                "clientVersion": "2.20210721.00.00",
                "clientFormFactor": "UNKNOWN_FORM_FACTOR",
                "clientScreen": "WATCH",
                "remoteHost": "64.46.29.19",
                "mainAppWebInfo": {
                    "graftUrl": "/watch?v=" + videoId,
                }
            },
            "user": {
                "lockedSafetyMode": false
            },
            "request": {
                "useSsl": true,
                "internalExperimentFlags": [],
                "consistencyTokenJars": []
            }
        },
        "videoId": videoId,
        "playbackContext": {
            "contentPlaybackContext": {
                "vis": 0,
                "splay": false,
                "autoCaptionsDefaultOn": false,
                "autonavState": "STATE_NONE",
                "html5Preference": "HTML5_PREF_WANTS",
                "lactMilliseconds": "-1"
            }
        },
        "racyCheckOk": false,
        "contentCheckOk": false
    };

    return fetch("https://api.codetabs.com/v1/proxy?quest=https://www.youtube.com/youtubei/v1/player?key=AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8", {
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST"
    }).then(response => response.json().then(data => ({
        data: data,
        status: response.status
    })).then(res => {
        return res;
    }));
}
