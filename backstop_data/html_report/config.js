report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "../bitmaps_reference/backstop_ci_demo_home_0_document_0_pc.png",
        "test": "../bitmaps_test/20250909-105410/backstop_ci_demo_home_0_document_0_pc.png",
        "selector": "document",
        "fileName": "backstop_ci_demo_home_0_document_0_pc.png",
        "label": "home",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "https://example.com/",
        "expect": 0,
        "viewportLabel": "pc",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.00"
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/backstop_ci_demo_home_0_document_1_sp.png",
        "test": "../bitmaps_test/20250909-105410/backstop_ci_demo_home_0_document_1_sp.png",
        "selector": "document",
        "fileName": "backstop_ci_demo_home_0_document_1_sp.png",
        "label": "home",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "https://example.com/",
        "expect": 0,
        "viewportLabel": "sp",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.00"
        }
      },
      "status": "pass"
    }
  ],
  "id": "backstop_ci_demo"
});