// Metadata
const meta = {
    id: 'ml.crafterpika.pluginmanager69', // ID's should be a unique string
    name: 'PluginManager',
    author: 'CrafterPika',
    version: '0.0.1',
    link: 'https://github.com/CrafterPika/starfiles-plugins',
    compatibility:{
        website: true
    }
}
// Declare Plugin
window['start_' + meta.id] = function(){
    function yeetPlugins() {
        if (confirm('Are you sure to continue, this will disable all plugins you installed')) {
            // DO IT!
            localStorage.removeItem("plugins");
            alert("Removed all Plugins")
          } else {
            alert('cancelled action')
          }
    }
    var paragraph = document.getElementsByTagName("p")[4];
    paragraph.textContent += '<br><br><button class="btn btn-small" onclick="yeetPlugins()">Remove All Plugins</button>';
}
// Run Plugin
init_plugin(meta);