var cy = cytoscape({
  container: document.querySelector('#cy'),

  boxSelectionEnabled: false,
  autounselectify: true,

  style: cytoscape.stylesheet()
    .selector('node')
      .css({
	'shape': 'rectangle',
        'content': 'data(name)',
        'text-valign': 'center',
        'color': 'white',
        'text-outline-width': 2,
        'background-color': '#FFE5EE',
        'text-outline-color': '#D4E0FA'
      })
    .selector('edge')
      .css({
        'curve-style': 'bezier',
        'target-arrow-shape': 'triangle',
        'target-arrow-color': '#ccc',
        'line-color': '#ccc',
        'width': 1
      })
    .selector(':selected')
      .css({
        'background-color': 'black',
        'line-color': 'black',
        'target-arrow-color': 'black',
        'source-arrow-color': 'black'
      })
    .selector('.faded')
      .css({
        'opacity': 0.25,
        'text-opacity': 0
      }),

  elements: {
    nodes: [
      { data: { id: 'eggs', name: 'Wt' }, renderedPosition: { x: -200, y: 20}},
      { data: { id: 'zeroplus', name: '0+' }, renderedPosition: { x: -130, y: 20}},
      { data: { id: 'psm', name: 'PSm' }, renderedPosition: { x: -70, y: 20}},
      { data: { id: 'sm1', name: 'Sm1' }, renderedPosition: { x: -10, y: 20}},
      { data: { id: 'sp1', name: 'Sp1' }, renderedPosition: { x: -10, y: -40}},
      { data: { id: 'parr1', name: 'Parr1' }, renderedPosition: { x: -10, y: 90}},
      { data: { id: 'sm2', name: 'Sm2' }, renderedPosition: { x: 50, y: 90}},
      { data: { id: 'sp2', name: 'Sp2' }, renderedPosition: { x: 50, y: 150}},
    ],
    edges: [
      { data: { source: 'eggs', target: 'zeroplus' } },
      { data: { source: 'zeroplus', target: 'psm' } },
      { data: { source: 'psm', target: 'sm1' } },
      { data: { source: 'sm1', target: 'sp1' } },
      { data: { source: 'sp1', target: 'eggs', 'curve-style': 'bezier' } },
      { data: { source: 'psm', target: 'parr1' } },
      { data: { source: 'parr1', target: 'sm2' } },
      { data: { source: 'sm2', target: 'sp2' } },
      { data: { source: 'sp2', target: 'eggs', 'curve-style': 'bezier' } }
    ]
  },

  layout: {
    //name: 'grid',
    name: 'preset'
    //padding: 10
  }
}).userZoomingEnabled(false); // on tap


var cy2 = cytoscape({
  container: document.querySelector('#cy2'),

  boxSelectionEnabled: false,
  autounselectify: true,

  style: cytoscape.stylesheet()
    .selector('node')
      .css({
        'content': 'data(name)',
        'text-valign': 'center',
        'color': 'white',
        'text-outline-width': 2,
        'background-color': '#D4E0FA',
        'text-outline-color': '#D4E0FA'
      })
    .selector('edge')
      .css({
        'curve-style': 'bezier',
        'target-arrow-shape': 'triangle',
        'target-arrow-color': '#ccc',
        'line-color': '#ccc',
        'width': 1
      })
    .selector(':selected')
      .css({
        'background-color': 'black',
        'line-color': 'black',
        'target-arrow-color': 'black',
        'source-arrow-color': 'black'
      })
    .selector('.faded')
      .css({
        'opacity': 0.25,
        'text-opacity': 0
      }),

  elements: {
    nodes: [
      { data: { id: 'sp1', name: 'Sp1' } },
      { data: { id: 'eggs', name: 'Wt' } },
      { data: { id: 'sp2', name: 'Sp2' } }
    ],
    edges: [
      { data: { source: 'sp1', target: 'eggs' } },
      { data: { source: 'sp2', target: 'eggs' } }
    ]
  },

  layout: {
    name: 'grid',
    padding: 10
  }
}).userZoomingEnabled(false); // on tap

var cy3 = cytoscape({
  container: document.querySelector('#cy3'),

  boxSelectionEnabled: false,
  autounselectify: true,

  style: cytoscape.stylesheet()
    .selector('node')
      .css({
        'content': 'data(name)',
        'text-valign': 'center',
        'color': 'white',
        'text-outline-width': 2,
        'background-color': '#D4E0FA',
        'text-outline-color': '#D4E0FA'
      })
    .selector('edge')
      .css({
        'curve-style': 'bezier',
        'target-arrow-shape': 'triangle',
        'target-arrow-color': '#ccc',
        'line-color': '#ccc',
        'width': 1
      })
    .selector(':selected')
      .css({
        'background-color': 'black',
        'line-color': 'black',
        'target-arrow-color': 'black',
        'source-arrow-color': 'black'
      })
    .selector('.faded')
      .css({
        'opacity': 0.25,
        'text-opacity': 0
      }),

  elements: {
    nodes: [
      { data: { id: 'eggs', name: 'Wt' } },
      { data: { id: 'Oplus', name: '0+' } }
    ],
    edges: [
      { data: { source: 'eggs', target: 'Oplus' } }
    ]
  },

  layout: {
    name: 'grid',
    padding: 10
  }
}).userZoomingEnabled(false); // on tap

var cy4 = cytoscape({
  container: document.querySelector('#cy4'),

  boxSelectionEnabled: false,
  autounselectify: true,

  style: cytoscape.stylesheet()
    .selector('node')
      .css({
        'content': 'data(name)',
        'text-valign': 'center',
        'color': 'white',
        'text-outline-width': 2,
        'background-color': '#D4E0FA',
        'text-outline-color': '#D4E0FA'
      })
    .selector('edge')
      .css({
        'curve-style': 'bezier',
        'target-arrow-shape': 'triangle',
        'target-arrow-color': '#ccc',
        'line-color': '#ccc',
        'width': 1
      })
    .selector(':selected')
      .css({
        'background-color': 'black',
        'line-color': 'black',
        'target-arrow-color': 'black',
        'source-arrow-color': 'black'
      })
    .selector('.faded')
      .css({
        'opacity': 0.25,
        'text-opacity': 0
      }),

  elements: {
    nodes: [
      { data: { id: 'Oplus', name: '0+' } },
      { data: { id: 'psm', name: 'PSm' } }
    ],
    edges: [
      { data: { source: 'Oplus', target: 'psm' } }
    ]
  },

  layout: {
    name: 'grid',
    padding: 10
  }
}).userZoomingEnabled(false); // on tap

var cy5 = cytoscape({
  container: document.querySelector('#cy5'),

  boxSelectionEnabled: false,
  autounselectify: true,

  style: cytoscape.stylesheet()
    .selector('node')
      .css({
        'content': 'data(name)',
        'text-valign': 'center',
        'color': 'white',
        'text-outline-width': 2,
        'background-color': '#D4E0FA',
        'text-outline-color': '#D4E0FA'
      })
    .selector('edge')
      .css({
        'curve-style': 'bezier',
        'target-arrow-shape': 'triangle',
        'target-arrow-color': '#ccc',
        'line-color': '#ccc',
        'width': 1
      })
    .selector(':selected')
      .css({
        'background-color': 'black',
        'line-color': 'black',
        'target-arrow-color': 'black',
        'source-arrow-color': 'black'
      })
    .selector('.faded')
      .css({
        'opacity': 0.25,
        'text-opacity': 0
      }),

  elements: {
    nodes: [
      { data: { id: 'psm', name: 'PSm' } },
      { data: { id: 'sm1', name: 'Sm1' } }
    ],
    edges: [
      { data: { source: 'psm', target: 'sm1' } }
    ]
  },

  layout: {
    name: 'grid',
    padding: 10
  }
}).userZoomingEnabled(false); // on tap

var cy6 = cytoscape({
  container: document.querySelector('#cy6'),

  boxSelectionEnabled: false,
  autounselectify: true,

  style: cytoscape.stylesheet()
    .selector('node')
      .css({
        'content': 'data(name)',
        'text-valign': 'center',
        'color': 'white',
        'text-outline-width': 2,
        'background-color': '#D4E0FA',
        'text-outline-color': '#D4E0FA'
      })
    .selector('edge')
      .css({
        'curve-style': 'bezier',
        'target-arrow-shape': 'triangle',
        'target-arrow-color': '#ccc',
        'line-color': '#ccc',
        'width': 1
      })
    .selector(':selected')
      .css({
        'background-color': 'black',
        'line-color': 'black',
        'target-arrow-color': 'black',
        'source-arrow-color': 'black'
      })
    .selector('.faded')
      .css({
        'opacity': 0.25,
        'text-opacity': 0
      }),

  elements: {
    nodes: [
      { data: { id: 'parr1', name: 'Parr1' } },
      { data: { id: 'sm2', name: 'Sm2' } }
    ],
    edges: [
      { data: { source: 'parr1', target: 'sm2' } }
    ]
  },

  layout: {
    name: 'grid',
    padding: 10
  }
}).userZoomingEnabled(false); // on tap

var cy7 = cytoscape({
  container: document.querySelector('#cy7'),

  boxSelectionEnabled: false,
  autounselectify: true,

  style: cytoscape.stylesheet()
    .selector('node')
      .css({
        'content': 'data(name)',
        'text-valign': 'center',
        'color': 'white',
        'text-outline-width': 2,
        'background-color': '#D4E0FA',
        'text-outline-color': '#D4E0FA'
      })
    .selector('edge')
      .css({
        'curve-style': 'bezier',
        'target-arrow-shape': 'triangle',
        'target-arrow-color': '#ccc',
        'line-color': '#ccc',
        'width': 1
      })
    .selector(':selected')
      .css({
        'background-color': 'black',
        'line-color': 'black',
        'target-arrow-color': 'black',
        'source-arrow-color': 'black'
      })
    .selector('.faded')
      .css({
        'opacity': 0.25,
        'text-opacity': 0
      }),

  elements: {
    nodes: [
      { data: { id: 'sm1', name: 'Sm1' } },
      { data: { id: 'sp1', name: 'Sp1' } }
    ],
    edges: [
      { data: { source: 'sm1', target: 'sp1' } }
    ]
  },

  layout: {
    name: 'grid',
    padding: 10
  }
}).userZoomingEnabled(false); // on tap

var cy8 = cytoscape({
  container: document.querySelector('#cy8'),

  boxSelectionEnabled: false,
  autounselectify: true,

  style: cytoscape.stylesheet()
    .selector('node')
      .css({
        'content': 'data(name)',
        'text-valign': 'center',
        'color': 'white',
        'text-outline-width': 2,
        'background-color': '#D4E0FA',
        'text-outline-color': '#D4E0FA'
      })
    .selector('edge')
      .css({
        'curve-style': 'bezier',
        'target-arrow-shape': 'triangle',
        'target-arrow-color': '#ccc',
        'line-color': '#ccc',
        'width': 1
      })
    .selector(':selected')
      .css({
        'background-color': 'black',
        'line-color': 'black',
        'target-arrow-color': 'black',
        'source-arrow-color': 'black'
      })
    .selector('.faded')
      .css({
        'opacity': 0.25,
        'text-opacity': 0
      }),

  elements: {
    nodes: [
      { data: { id: 'sm2', name: 'Sm2' } },
      { data: { id: 'sp2', name: 'Sp2' } }
    ],
    edges: [
      { data: { source: 'sm2', target: 'sp2' } }
    ]
  },

  layout: {
    name: 'grid',
    padding: 10
  }
}).userZoomingEnabled(false); // on tap

var cy9 = cytoscape({
  container: document.querySelector('#cy9'),

  boxSelectionEnabled: false,
  autounselectify: true,

  style: cytoscape.stylesheet()
    .selector('node')
      .css({
        'content': 'data(name)',
        'text-valign': 'center',
        'color': 'white',
        'text-outline-width': 2,
        'background-color': '#D4E0FA',
        'text-outline-color': '#D4E0FA'
      })
    .selector('edge')
      .css({
        'curve-style': 'bezier',
        'target-arrow-shape': 'triangle',
        'target-arrow-color': '#ccc',
        'line-color': '#ccc',
        'width': 1
      })
    .selector(':selected')
      .css({
        'background-color': 'black',
        'line-color': 'black',
        'target-arrow-color': 'black',
        'source-arrow-color': 'black'
      })
    .selector('.faded')
      .css({
        'opacity': 0.25,
        'text-opacity': 0
      }),

  elements: {
    nodes: [
      { data: { id: 'wt', name: 'Wt' }, renderedPosition: { x: -80, y: 30}},
      { data: { id: 'Oplus', name: '0+' }, renderedPosition: { x: 60, y: 30}},
      { data: { id: 'alpha', name: 'α' }, renderedPosition: { x: 40, y: -30}},
      { data: { id: 'beta', name: 'β' }, renderedPosition: { x:70, y: -30}},
      { data: { id: 'sigma', name: 'σ' }, renderedPosition: {x:100, y: -30}}
    ],
    edges: [
      { data: { source: 'wt', target: 'Oplus' } },
      { data: { source: 'alpha', target: 'Oplus' } },
      { data: { source: 'beta', target: 'Oplus' } },
      { data: { source: 'sigma', target: 'Oplus' } }
    ]
  },

  layout: {
    name: 'preset'
  }
}).userZoomingEnabled(false); // on tap

var cy10 = cytoscape({
  container: document.querySelector('#cy10'),

  boxSelectionEnabled: false,
  autounselectify: true,

  style: cytoscape.stylesheet()
    .selector('node')
      .css({
        'content': 'data(name)',
        'text-valign': 'center',
        'color': 'white',
        'text-outline-width': 2,
        'background-color': '#D4E0FA',
        'text-outline-color': '#D4E0FA'
      })
    .selector('edge')
      .css({
        'curve-style': 'bezier',
        'target-arrow-shape': 'triangle',
        'target-arrow-color': '#ccc',
        'line-color': '#ccc',
        'width': 1
      })
    .selector(':selected')
      .css({
        'background-color': 'black',
        'line-color': 'black',
        'target-arrow-color': 'black',
        'source-arrow-color': 'black'
      })
    .selector('.faded')
      .css({
        'opacity': 0.25,
        'text-opacity': 0
      }),

  elements: {
    nodes: [
      { data: { id: 'Oplus', name: '0+' }, renderedPosition: { x: -30, y: 30}},
      { data: { id: 'psm', name: 'psm' }, renderedPosition: { x: 40, y: 30}},
      { data: { id: 'gamma', name: 'γ' }, renderedPosition: { x: 40, y: -30}}
    ],
    edges: [
      { data: { source: 'Oplus', target: 'psm' }},
      { data: { source: 'gamma', target: 'psm' }}
    ]
  },

  layout: {
    name: 'preset'
  }
}).userZoomingEnabled(false); // on tap

var cy11 = cytoscape({
  container: document.querySelector('#cy11'),

  boxSelectionEnabled: false,
  autounselectify: true,

  style: cytoscape.stylesheet()
    .selector('node')
      .css({
        'content': 'data(name)',
        'text-valign': 'center',
        'color': 'white',
        'text-outline-width': 2,
        'background-color': '#D4E0FA',
        'text-outline-color': '#D4E0FA'
      })
    .selector('edge')
      .css({
        'curve-style': 'bezier',
        'target-arrow-shape': 'triangle',
        'target-arrow-color': '#ccc',
        'line-color': '#ccc',
        'width': 1
      })
    .selector(':selected')
      .css({
        'background-color': 'black',
        'line-color': 'black',
        'target-arrow-color': 'black',
        'source-arrow-color': 'black'
      })
    .selector('.faded')
      .css({
        'opacity': 0.25,
        'text-opacity': 0
      }),

  elements: {
    nodes: [
      { data: { id: 'theta', name: 'θ' }, renderedPosition: { x: -30, y: -30}},
      { data: { id: 'psm', name: 'PSm' }, renderedPosition: { x: -30, y: 30}},
      { data: { id: 'sm1', name: 'Sm1' }, renderedPosition: { x: 40, y: -10}},
      { data: { id: 'parr1', name: 'Parr1' }, renderedPosition: { x: 40, y: 50}}
    ],
    edges: [
      { data: { source: 'theta', target: 'sm1' }},
      { data: { source: 'theta', target: 'parr1' }},
      { data: { source: 'psm', target: 'sm1' }},
      { data: { source: 'psm', target: 'parr1' }}
    ]
  },

  layout: {
    name: 'preset'
  }
}).userZoomingEnabled(false); // on tap

var cy12 = cytoscape({
  container: document.querySelector('#cy12'),

  boxSelectionEnabled: false,
  autounselectify: true,

  style: cytoscape.stylesheet()
    .selector('node')
      .css({
        'content': 'data(name)',
        'text-valign': 'center',
        'color': 'white',
        'text-outline-width': 2,
        'background-color': '#D4E0FA',
        'text-outline-color': '#D4E0FA'
      })
    .selector('edge')
      .css({
        'curve-style': 'bezier',
        'target-arrow-shape': 'triangle',
        'target-arrow-color': '#ccc',
        'line-color': '#ccc',
        'width': 1
      })
    .selector(':selected')
      .css({
        'background-color': 'black',
        'line-color': 'black',
        'target-arrow-color': 'black',
        'source-arrow-color': 'black'
      })
    .selector('.faded')
      .css({
        'opacity': 0.25,
        'text-opacity': 0
      }),

  elements: {
    nodes: [
      { data: { id: 'parr1', name: 'Parr1' }, renderedPosition: { x: 40, y: 50}},
      { data: { id: 'sm2', name: 'Sm2' }, renderedPosition: { x: 40, y: -10}},
      { data: { id: 'gamma', name: 'γparr1' }, renderedPosition: { x: -30, y: 30}}
    ],
    edges: [
      { data: { source: 'parr1', target: 'sm2' }},
      { data: { source: 'gamma', target: 'sm2' }}
    ]
  },

  layout: {
    name: 'preset'
  }
}).userZoomingEnabled(false); // on tap

var cy13 = cytoscape({
  container: document.querySelector('#cy13'),

  boxSelectionEnabled: false,
  autounselectify: true,

  style: cytoscape.stylesheet()
    .selector('node')
      .css({
        'content': 'data(name)',
        'text-valign': 'center',
        'color': 'white',
        'text-outline-width': 2,
        'background-color': '#D4E0FA',
        'text-outline-color': '#D4E0FA'
      })
    .selector('edge')
      .css({
        'curve-style': 'bezier',
        'target-arrow-shape': 'triangle',
        'target-arrow-color': '#ccc',
        'line-color': '#ccc',
        'width': 1
      })
    .selector(':selected')
      .css({
        'background-color': 'black',
        'line-color': 'black',
        'target-arrow-color': 'black',
        'source-arrow-color': 'black'
      })
    .selector('.faded')
      .css({
        'opacity': 0.25,
        'text-opacity': 0
      }),

  elements: {
    nodes: [
      { data: { id: 'sm1', name: 'Sm1' }, renderedPosition: { x: 95, y: -10}},
      { data: { id: 'sp1', name: 'Sp1' }, renderedPosition: { x: 40, y: -10}},
      { data: { id: 'sm2', name: 'Sm2' }, renderedPosition: { x: 95, y: 50}},
      { data: { id: 'sp2', name: 'Sp2' }, renderedPosition: { x: 40, y: 50}},
      { data: { id: 'gamma', name: 'γsm' }, renderedPosition: { x: -20, y: 30}}
    ],
    edges: [
      { data: { source: 'sm1', target: 'sp1' }},
      { data: { source: 'gamma', target: 'sp1' }},
      { data: { source: 'gamma', target: 'sp2' }},
      { data: { source: 'sm2', target: 'sp2' }}
    ]
  },

  layout: {
    name: 'preset'
  }
}).userZoomingEnabled(false); // on tap

var cy14 = cytoscape({
  container: document.querySelector('#cy14'),

  boxSelectionEnabled: false,
  autounselectify: true,

  style: cytoscape.stylesheet()
    .selector('node')
      .css({
        'content': 'data(name)',
        'text-valign': 'center',
        'color': 'white',
        'text-outline-width': 2,
        'background-color': '#D4E0FA',
        'text-outline-color': '#D4E0FA'
      })
    .selector('edge')
      .css({
        'curve-style': 'bezier',
        'target-arrow-shape': 'triangle',
        'target-arrow-color': '#ccc',
        'line-color': '#ccc',
        'width': 1
      })
    .selector(':selected')
      .css({
        'background-color': 'black',
        'line-color': 'black',
        'target-arrow-color': 'black',
        'source-arrow-color': 'black'
      })
    .selector('.faded')
      .css({
        'opacity': 0.25,
        'text-opacity': 0
      }),

  elements: {
    nodes: [
      { data: { id: 'eggs', name: 'Wt' }, renderedPosition: { x: -130, y: 0}},
      { data: { id: 'Oplus', name: '0+' }, renderedPosition: { x: -70, y: 0}},
      { data: { id: 'alpha', name: 'α' }, renderedPosition: { x: -110, y: -50}},
      { data: { id: 'beta', name: 'β' }, renderedPosition: { x:-80, y: -50}},
      { data: { id: 'sigma', name: 'σ' }, renderedPosition: {x:-50, y: -50}},
      { data: { id: 'psm', name: 'PSm' }, renderedPosition: { x: 20, y: 0}},
      { data: { id: 'gamma', name: 'γ_0+' }, renderedPosition: { x: 20, y: -50}},
      { data: { id: 'theta', name: 'θ_Sm1' }, renderedPosition: { x: 78, y: -50}},
      { data: { id: 'sm1', name: 'Sm1' }, renderedPosition: { x: 90, y: 0}},
      { data: { id: 'parr1', name: 'Parr1' }, renderedPosition: { x: 35, y: 70}},
      { data: { id: 'sp1', name: 'Sp1' }, renderedPosition: { x: 170, y: 0}},
      { data: { id: 'sm2', name: 'Sm2' }, renderedPosition: { x: 90, y: 70}},
      { data: { id: 'gamma2', name: 'γ_Parr1' }, renderedPosition: { x: 90, y: 130}},
      { data: { id: 'sp2', name: 'Sp2' }, renderedPosition: { x: 170, y: 70}},
      { data: { id: 'gamma3', name: 'γ_Sm' }, renderedPosition: { x: 130, y: -50}}
    ],
    edges: [
      { data: { source: 'eggs', target: 'Oplus' }},
      { data: { source: 'alpha', target: 'Oplus' }},
      { data: { source: 'beta', target: 'Oplus' }},
      { data: { source: 'Oplus', target: 'psm' }},
      { data: { source: 'gamma', target: 'psm' }},
      { data: { source: 'sigma', target: 'Oplus' }},
      { data: { source: 'theta', target: 'sm1' }},
      { data: { source: 'theta', target: 'parr1' }},
      { data: { source: 'psm', target: 'sm1' }},
      { data: { source: 'psm', target: 'parr1' }},
      { data: { source: 'sm1', target: 'sp1' }},
      { data: { source: 'parr1', target: 'sm2' }},
      { data: { source: 'gamma2', target: 'sm2' }},
      { data: { source: 'sm2', target: 'sp2' }},
      { data: { source: 'gamma3', target: 'sp1' }},
      { data: { source: 'gamma3', target: 'sp2' }}
    ]
  },

  layout: {
    name: 'preset'
  }
}).userZoomingEnabled(false); // on tap

var cy15 = cytoscape({
  container: document.querySelector('#cy15'),

  boxSelectionEnabled: false,
  autounselectify: true,

  style: cytoscape.stylesheet()
    .selector('node')
      .css({
        'content': 'data(name)',
        'text-valign': 'center',
        'color': 'white',
        'text-outline-width': 2,
        'background-color': '#D4E0FA',
        'text-outline-color': '#D4E0FA'
      })
    .selector('$node > node')
      .css({
	'padding-top': '10px',
        'padding-left': '10px',
        'padding-bottom': '10px',
        'padding-right': '10px',
        'text-valign': 'top',
        'text-halign': 'center',
        'background-color': '#EEE0FF'
      })
    .selector('edge')
      .css({
        'curve-style': 'bezier',
        'target-arrow-shape': 'triangle',
        'target-arrow-color': '#ccc',
        'line-color': '#ccc',
        'width': 1
      })
    .selector(':selected')
      .css({
        'background-color': 'black',
        'line-color': 'black',
        'target-arrow-color': 'black',
        'source-arrow-color': 'black'
      })
    .selector('#y1, #y2')
      .css({
	'background-color': 'pink'
    })
    .selector('.faded')
      .css({
        'opacity': 0.25,
        'text-opacity': 0
      }),

  elements: {
    nodes: [
      { data: { id: 'simplemodel', name: 'Simple Model' }},
      { data: { id: 'theta1', name: 'θ', parent: 'simplemodel' }, renderedPosition: { x: -70, y: -50}},
      { data: { id: 'y1', name: 'Y', parent: 'simplemodel' }, renderedPosition: { x: -70, y: 50}},
      { data: { id: 'hm', name: 'Hierarchical Model' }},
      { data: { id: 'theta2', name: 'θ', parent: 'hm' }, renderedPosition: { x: 130, y: -50}},
      { data: { id: 'z', name: 'Z', parent: 'hm' }, renderedPosition: { x: 130, y: 0}},
      { data: { id: 'y2', name: 'Y', parent: 'hm' }, renderedPosition: { x: 130, y: 50}}
    ],
    edges: [
      { data: { source: 'theta1', target: 'y1' }},
      { data: { source: 'theta2', target: 'z' }},
      { data: { source: 'z', target: 'y2' }}
    ]
  },

  layout: {
    name: 'preset'
  }
}).userZoomingEnabled(false); // on tap

var cy16 = cytoscape({
  container: document.querySelector('#cy16'),

  boxSelectionEnabled: false,
  autounselectify: true,

  style: cytoscape.stylesheet()
    .selector('node')
      .css({
        'content': 'data(name)',
        'text-valign': 'center',
        'color': 'white',
        'text-outline-width': 2,
        'background-color': '#D4E0FA',
        'text-outline-color': '#D4E0FA'
      })
    .selector('$node > node')
      .css({
	'padding-top': '10px',
        'padding-left': '10px',
        'padding-bottom': '10px',
        'padding-right': '10px',
        'text-valign': 'top',
        'text-halign': 'center',
        'background-color': '#EEE0FF'
      })
    .selector('edge')
      .css({
        'curve-style': 'bezier',
        'target-arrow-shape': 'triangle',
        'target-arrow-color': '#ccc',
        'line-color': '#ccc',
        'width': 1
      })
    .selector(':selected')
      .css({
        'background-color': 'black',
        'line-color': 'black',
        'target-arrow-color': 'black',
        'source-arrow-color': 'black'
      })
    .selector('#pi0, #pism, #pisp')
      .css({
	'shape': 'rectangle',
      })
    .selector('#pi0, #c0, #csm1, #pism, #csm2, #csp1, #pisp, #csp2')
      .css({
	'background-color': 'pink',
      })
    .selector('.faded')
      .css({
        'opacity': 0.25,
        'text-opacity': 0
      }),

  elements: {
    nodes: [
      { data: { id: 'latent', name: 'latent/process' }},
      { data: { id: 'eggs', name: 'Wt', parent: 'latent' }, renderedPosition: { x: -130, y: 50}},
      { data: { id: 'Oplus', name: '0+', parent: 'latent' }, renderedPosition: { x: -70, y: 50}},
      { data: { id: 'parameters', name: 'parameters' }},
      { data: { id: 'alpha', name: 'α', parent: 'parameters' }, renderedPosition: { x: -110, y: -50}},
      { data: { id: 'beta', name: 'β', parent: 'parameters' }, renderedPosition: { x:-80, y: -50}},
      { data: { id: 'sigma', name: 'σ', parent: 'parameters' }, renderedPosition: {x:-50, y: -50}},
      { data: { id: 'psm', name: 'PSm', parent: 'latent' }, renderedPosition: { x: 20, y: 50}},
      { data: { id: 'gamma', name: 'γ_0+', parent: 'parameters' }, renderedPosition: { x: 20, y: -50}},
      { data: { id: 'theta', name: 'θ_Sm1', parent: 'parameters' }, renderedPosition: { x: 78, y: -50}},
      { data: { id: 'sm1', name: 'Sm1', parent: 'latent' }, renderedPosition: { x: 90, y: 50}},
      { data: { id: 'parr1', name: 'Parr1', parent: 'latent' }, renderedPosition: { x: 35, y: 100}},
      { data: { id: 'sp1', name: 'Sp1', parent: 'latent' }, renderedPosition: { x: 170, y: 50}},
      { data: { id: 'sm2', name: 'Sm2', parent: 'latent' }, renderedPosition: { x: 130, y: 100}},
      { data: { id: 'gamma2', name: 'γ_Parr1', parent: 'parameters' }, renderedPosition: { x: 150, y: -50}},
      { data: { id: 'sp2', name: 'Sp2', parent: 'latent' }, renderedPosition: { x: 230, y: 100}},
      { data: { id: 'gamma3', name: 'γ_Sm', parent: 'parameters' }, renderedPosition: { x: 220, y: -50}},
      { data: { id: 'obs', name: 'observed and/or given' }},
      { data: { id: 'c0', name: 'C O+, t+1', parent: 'obs' }, renderedPosition: { x: -70, y: 250}},
      { data: { id: 'pi0', name: 'π 0+', parent: 'obs' }, renderedPosition: { x: -120, y: 200}},
      { data: { id: 'csm1', name: 'C Sm1, t+2', parent: 'obs' }, renderedPosition: { x: 20, y: 250}},
      { data: { id: 'pism', name: 'π Sm', parent: 'obs' }, renderedPosition: { x: 70, y: 200}},
      { data: { id: 'csm2', name: 'C Sm2, t+3', parent: 'obs' }, renderedPosition: { x: 120, y: 250}},
      { data: { id: 'csp1', name: 'C Sp1, t+3', parent: 'obs' }, renderedPosition: { x: 170, y: 280}},
      { data: { id: 'pisp', name: 'π Sp', parent: 'obs' }, renderedPosition: { x: 215, y: 200}},
      { data: { id: 'csp2', name: 'C Sp2, t+4', parent: 'obs' }, renderedPosition: { x: 270, y: 280}}
    ],
    edges: [
      { data: { source: 'eggs', target: 'Oplus' }},
      { data: { source: 'alpha', target: 'Oplus' }},
      { data: { source: 'beta', target: 'Oplus' }},
      { data: { source: 'Oplus', target: 'psm' }},
      { data: { source: 'gamma', target: 'psm' }},
      { data: { source: 'sigma', target: 'Oplus' }},
      { data: { source: 'theta', target: 'sm1' }},
      { data: { source: 'theta', target: 'parr1' }},
      { data: { source: 'psm', target: 'sm1' }},
      { data: { source: 'psm', target: 'parr1' }},
      { data: { source: 'sm1', target: 'sp1' }},
      { data: { source: 'parr1', target: 'sm2' }},
      { data: { source: 'gamma2', target: 'sm2' }},
      { data: { source: 'sm2', target: 'sp2' }},
      { data: { source: 'gamma3', target: 'sp1' }},
      { data: { source: 'gamma3', target: 'sp2' }},
      { data: { source: 'Oplus', target: 'c0' }},
      { data: { source: 'pi0', target: 'c0' }},
      { data: { source: 'sm1', target: 'csm1' }},
      { data: { source: 'pism', target: 'csm1' }},
      { data: { source: 'pism', target: 'csm2' }},
      { data: { source: 'sp1', target: 'csp1' }},
      { data: { source: 'pisp', target: 'csp1' }},
      { data: { source: 'pisp', target: 'csp2' }}
    ]
  },

  layout: {
    name: 'preset'
  }
}).userZoomingEnabled(false); // on tap
