class AssetDownload{
  constructor(label, asset, icon){
    this.label = label;
    this.asset = asset;
    this.icon = icon;
  }

  downloadUrl(project_id, task_id){
    return `/api/projects/${project_id}/tasks/${task_id}/download/${this.asset}`;
  }

  get separator(){ 
    return false;
  }
}

class AssetDownloadSeparator extends AssetDownload{
  constructor(){
    super("-");
  }

  downloadUrl(){
    return "#";
  }

  get separator(){
    return true;
  }
}

const api = {
  all: function() {
    return [
      new AssetDownload("Orthophoto (GeoTIFF)","orthophoto.tif","Map"),
      new AssetDownload("Orthophoto (PNG)","orthophoto.png","Image"),
      new AssetDownload("Terrain Model (GeoTIFF)","dtm.tif","FilterHdr"),
      new AssetDownload("Surface Model (GeoTIFF)","dsm.tif","FilterHdr"),
      new AssetDownload("Point Cloud (LAS)","georeferenced_model.las","BlurOn"),
      new AssetDownload("Point Cloud (PLY)","georeferenced_model.ply","BlurOn"),
      new AssetDownload("Point Cloud (CSV)","georeferenced_model.csv","BlurOn"),
      new AssetDownload("Textured Model","textured_model.zip","Gradient"),
      new AssetDownloadSeparator(),
      new AssetDownload("All Assets","all.zip","Archive")
    ];
  },

  excludeSeparators: function(){
    return api.all().filter(asset => !asset.separator);
  },

  // @param assets {String[]} list of assets (example: ['geotiff', 'las']))
  only: function(assets){
    return api.all().filter(asset => assets.indexOf(asset.asset) !== -1);
  }
}

export default api;

