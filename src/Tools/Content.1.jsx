import v1_FRM from "./Versions/Framework/v1_FRM";
import v1_LA from "./Versions/libraries/authentication/v1_LA";
import v1_CMMD from "./Versions/Commands/v1_CMMD";
import v3_CMD from "./Versions/libraries/command/v3_CMD";
import v8_LBD from "./Versions/libraries/database/v8_LDB";
import v1_LDI from "./Versions/libraries/dependency-injection/v1_LDI";
import v4_LF from "./Versions/libraries/files/v4_LF";
import v2_LH from "./Versions/libraries/helpers/v2_LH";
import v5_LR from "./Versions/libraries/request/v5_LR";
import v5_LM from "./Versions/libraries/mailer/v5_LM";

export default function Content() {
  return {
    framework: {
      v1: {
        docs: v1_FRM(),
        commands: v1_CMMD(),
      },
    },
    library: {
      authentication: {
        v1: v1_LA(),
      },
      command: {
        v3: v3_CMD(),
      },
      database: {
        v8: v8_LBD(),
      },
      "dependency-injection": {
        v1: v1_LDI(),
      },
      files: {
        v4: v4_LF(),
      },
      helpers: {
        v2: v2_LH(),
      },
      mailer: {
        v5: v5_LM(),
      },
      request: {
        v5: v5_LR(),
      },
      route: {
        v8: v8_LRT(),
      },
      // security: {
      //   title: "lion-packages/security",
      //   url: "/libraries/lion/security/index",
      //   changelog: true,
      //   component: {
      //     title: "lion-packages/security",
      //     library: "security",
      //     url_github: "https://github.com/lion-packages/security",
      //     command: "composer require lion/security",
      //   },
      //   description:
      //     "Library created with the function of implementing AES, RSA and JWT Security functions for PHP",
      //   class: {
      //     "v7.0.0": v7_0_0_LS(),
      //   },
      // },
      // spreadsheet: {
      //   title: "lion-packages/spreadsheet",
      //   url: "/libraries/lion/spreadsheet/index",
      //   changelog: true,
      //   component: {
      //     title: "lion-packages/spreadsheet",
      //     library: "spreadsheet",
      //     url_github: "https://github.com/lion-packages/spreadsheet",
      //     command: "composer require lion/spreadsheet",
      //   },
      //   description: "Library for easy spreadsheet use.",
      //   class: {
      //     "v1.7.0": v1_7_0_LSP(),
      //   },
      // },
    },
  };
}
