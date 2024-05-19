// App.js
import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import TreeView from 'react-treeview';
import 'react-treeview/react-treeview.css';
import './App.css';

const App = () => {
  const [data, setData] = useState({
    "rexroth": {
        "children": {
            "linear_motion_technology": {
                "children": {}
            }
        }
    },
    "linear_motion_technology": {
        "children": {
            "linear_guides": {
                "children": {}
            },
            "integrated_measuring_systems": {
                "children": {}
            },
            "screw_drives": {
                "children": {}
            },
            "ball_transfer_units_and_tolerance_rings": {
                "children": {}
            },
            "plastic_plain_bearings": {
                "children": {}
            },
            "electromechanical_cylinders": {
                "children": {}
            },
            "linear_axes": {
                "children": {}
            },
            "multi_axis_systems": {
                "children": {}
            },
            "smart_function_kit_pressing": {
                "children": {}
            },
            "smart_function_kit_handling": {
                "children": {}
            },
            "smart_function_kit_dispensing": {
                "children": {}
            },
            "smart_flex_effector": {
                "children": {}
            }
        }
    },
    "linear_guides": {
        "children": {
            "ball_rail_systems_high_precision": {
                "children": {}
            },
            "ball_rail_systems_compact_line": {
                "children": {}
            },
            "miniature_ball_rail_systems": {
                "children": {}
            },
            "roller_rail_systems": {
                "children": {}
            },
            "cam_roller_guides": {
                "children": {}
            },
            "linear_bushings_and_shafts": {
                "children": {}
            },
            "clamping_and_braking_units": {
                "children": {}
            }
        }
    },
    "ball_rail_systems_high_precision": {
        "children": {
            "high_precision_ball_runner_blocks_bshp": {
                "children": {}
            },
            "high_precision_ball_guide_rails_bshp": {
                "children": {}
            },
            "accessories_for_ball_rail_systems": {
                "children": {}
            }
        }
    },
    "ball_rail_systems_compact_line": {
        "children": {
            "ball_runner_blocks_compact_line": {
                "children": {}
            },
            "ball_guide_rails_compact_line": {
                "children": {}
            },
            "accessories_for_ball_rail_systems_compact_line": {
                "children": {}
            }
        }
    },
    "miniature_ball_rail_systems": {
        "children": {
            "miniature_ball_runner_block": {
                "children": {}
            },
            "miniature_ball_guide_rails": {
                "children": {}
            },
            "accessories_for_miniature_ball_rail_systems": {
                "children": {}
            }
        }
    },
    "roller_rail_systems": {
        "children": {
            "roller_runner_block": {
                "children": {}
            },
            "roller_guide_rails": {
                "children": {}
            },
            "accessories_for_roller_rail_systems": {
                "children": {}
            }
        }
    },
    "cam_roller_guides": {
        "children": {
            "cam_roller_runner_blocks": {
                "children": {}
            },
            "cam_roller_guide_rails": {
                "children": {}
            },
            "bearing_with_adjusting_screws": {
                "children": {}
            },
            "accessories_for_cam_roller_guides": {
                "children": {}
            }
        }
    },
    "linear_bushings_and_shafts": {
        "children": {
            "linear_bushings": {
                "children": {}
            },
            "linear_sets_with_linear_bushings": {
                "children": {}
            },
            "precision_steel_shafts": {
                "children": {}
            },
            "precision_steel_shafts_with_shaft_support_rails": {
                "children": {}
            },
            "shaft_support_blocks": {
                "children": {}
            },
            "accessories_for_linear_bushings": {
                "children": {}
            }
        }
    },
    "clamping_and_braking_units": {
        "children": {
            "product_list": {
                "children": {}
            }
        }
    },
    "linear_axes": {
        "children": {
            "small_handling_linear_axes": {
                "children": {}
            }
        }
    },
    "small_handling_linear_axes": {
        "children": {
            "product_list": {
                "children": {}
            }
        }
    },
    "screw_drives": {
        "children": {
            "ball_screw_assemblies": {
                "children": {}
            },
            "planetary_screw_assemblies": {
                "children": {}
            },
            "drive_units": {
                "children": {}
            }
        }
    },
    "ball_screw_assemblies": {
        "children": {
            "basa_ball_screw_drives": {
                "children": {}
            },
            "ball_screw_assembly_nuts": {
                "children": {}
            },
            "precision_screws": {
                "children": {}
            },
            "accessories_for_ball_screw_assemblies": {
                "children": {}
            }
        }
    },
    "basa_ball_screw_drives": {
        "children": {
            "empty": {
                "children": {}
            }
        }
    },
    "ball_screw_assembly_nuts": {
        "children": {
            "product_list": {
                "children": {}
            }
        }
    },
    "precision_screws": {
        "children": {
            "product_list": {
                "children": {}
            }
        }
    },
    "accessories_for_ball_screw_assemblies": {
        "children": {
            "product_list": {
                "children": {}
            }
        }
    }
});





  const renderTree = (nodes) => {
    return Object.entries(nodes).map(([key, value]) => (
      <TreeView
        key={key}
        nodeLabel={key}
        defaultCollapsed={true}
      >
        {value.children && Object.keys(value.children).length > 0 ? renderTree(value.children) : null}
      </TreeView>
    ));
  };

  return (
    <div className="App">
      {data ? renderTree(data) : 'Loading...'}
    </div>
  );
};

export default App;
