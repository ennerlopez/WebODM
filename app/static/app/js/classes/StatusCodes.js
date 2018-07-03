const QUEUED = 10,
      RUNNING = 20,
      FAILED = 30,
      COMPLETED = 40,
      CANCELED = 50;

let statusCodes = {
    [QUEUED]: {
        descr: "Queued",
        icon: "fa fa-hourglass-3 fa-2x"
    },
    [RUNNING]: {
        descr: "Running",
        icon: "fa fa-gear fa-spin fa-fw fa-2x"
    },
    [FAILED]: {
        descr: "Failed",
        icon: "fa fa-frown-o fa-2x"
    },
    [COMPLETED]: {
        descr: "Completed",
        icon: "fa fa-check fa-2x"
    },
    [CANCELED]: {
        descr: "Canceled",
        icon: "fa fa-ban fa-2x"
    }
};

export default {
    QUEUED: QUEUED,
    RUNNING: RUNNING,
    FAILED: FAILED,
    COMPLETED: COMPLETED,
    CANCELED: CANCELED,

    description: function(statusCode) {
      if (statusCodes[statusCode]) return statusCodes[statusCode].descr;
      else return "";
    },

    icon: function(statusCode){
      if (statusCodes[statusCode]) return statusCodes[statusCode].icon;
      else return "fa-5x fa-gear fa-spin";
    }
};

