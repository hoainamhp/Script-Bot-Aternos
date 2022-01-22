function trigger() {
    var url = ["https://bot-sv-1.glitch.me",
    "https://typhoon-pickled-volleyball.glitch.me",];
    for (var x = 0; x < url.length; x++) {
        var uri = url[x];
        try {
            UrlFetchApp.fetch(uri);
        } catch (err) {
            Logger.log(err.message)
        }

    }
}