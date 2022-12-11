export default {
  "version" : 8,
  "sources" : {
    "baremaps" : {
      "type" : "vector",
      "url" : "http://localhost:9000/tiles.json"
    }
  },
  "layers" : [ {
    "id" : "building",
    "type" : "fill",
    "source" : "baremaps",
    "source-layer" : "building",
    "layout" : {
      "visibility" : "visible"
    },
    "paint" : {
      "fill-color" : "rgba(255, 0, 0, 1)"
    }
  } ],
  "center" : [ 9.5554, 47.166 ],
  "metadata" : {
    "maputnik:renderer" : "mbgljs"
  },
  "zoom" : 14
};