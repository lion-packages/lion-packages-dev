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
import v8_LRT from "./Versions/libraries/route/v8_LRT";
import v7_LS from "./Versions/libraries/security/v7_LS";
import v1_LSP from "./Versions/libraries/spreadsheet/v1_LSP";
import v1_LT from "./Versions/libraries/test/v1_LT";
import v2_FRM from "./Versions/Framework/v2_FRM";
import v2_CMMD from "./Versions/Commands/V2_CMMD";
import v3_LH from "./Versions/libraries/helpers/v3_LH";
import v3_FRM from "./Versions/Framework/v3_FRM";
import v3_CMMD from "./Versions/Commands/V3_CMMD";
import v9_LRT from "./Versions/libraries/route/v9_LRT";
import v10_LRT from "./Versions/libraries/route/v10_LRT";
import v11_LRT from "./Versions/libraries/route/v11_LRT";
import v8_LS from "./Versions/libraries/security/v8_LS";
import v9_LS from "./Versions/libraries/security/v9_LS";
import v6_LR from "./Versions/libraries/request/v6_LR";
import v5_LF from "./Versions/libraries/files/v5_LF";
import v6_LF from "./Versions/libraries/files/v6_LF";
import v7_LF from "./Versions/libraries/files/v7_LF";
import v4_LH from "./Versions/libraries/helpers/v4_LH";
import v2_LDI from "./Versions/libraries/dependency-injection/v2_LDI";
import v2_LA from "./Versions/libraries/authentication/v2_LA";
import v3_LA from "./Versions/libraries/authentication/v3_LA";
import v4_LA from "./Versions/libraries/authentication/v4_LA";
import v2_LSP from "./Versions/libraries/spreadsheet/v2_LSP";
import v3_LSP from "./Versions/libraries/spreadsheet/v3_LSP";
import v4_LSP from "./Versions/libraries/spreadsheet/v4_LSP";
import v2_LT from "./Versions/libraries/test/v2_LT";
import v3_LDI from "./Versions/libraries/dependency-injection/v3_LDI";
import v3_LT from "./Versions/libraries/test/v3_LT";
import v8_LF from "./Versions/libraries/files/v8_LF";
import v4_LDI from "./Versions/libraries/dependency-injection/v4_LDI";
import v10_LS from "./Versions/libraries/security/v10_LS";
import v11_LS from "./Versions/libraries/security/v11_LS";
import v7_LR from "./Versions/libraries/request/v7_LR";
import v5_LA from "./Versions/libraries/authentication/v5_LA";
import v1_LE from "./Versions/libraries/exceptions/v1_LE";
import v2_LE from "./Versions/libraries/exceptions/v2_LE";
import v5_LH from "./Versions/libraries/helpers/v5_LH";
import v4_CMD from "./Versions/libraries/command/v4_CMD";
import v5_CMD from "./Versions/libraries/command/v5_CMD";
import v4_FRM from "./Versions/Framework/v4_FRM";
import v4_CMMD from "./Versions/Commands/V4_CMMD";
import v10_LBD from "./Versions/libraries/database/v10_LDB";
import v11_LBD from "./Versions/libraries/database/v11_LDB";
import v12_LRT from "./Versions/libraries/route/v12_LRT";

export default function Content() {
  return {
    framework: {
      versions: {
        v4: {
          docs: v4_FRM(),
          commands: v4_CMMD(),
        },
        v3: {
          docs: v3_FRM(),
          commands: v3_CMMD(),
        },
        v2: {
          docs: v2_FRM(),
          commands: v2_CMMD(),
        },
        v1: {
          docs: v1_FRM(),
          commands: v1_CMMD(),
        },
      },
    },
    library: {
      authentication: {
        description: "Library to authenticate users in 2 steps.",
        support: true,
        versions: {
          v5: v5_LA(),
          v4: v4_LA(),
          v3: v3_LA(),
          v2: v2_LA(),
          v1: v1_LA(),
        },
      },
      command: {
        description:
          "library created with the function of executing commands from PHP.",
        support: true,
        versions: {
          v5: v5_CMD(),
          v4: v4_CMD(),
          v3: v3_CMD(),
        },
      },
      database: {
        description:
          "Package responsible for generating and executing statements for databases (MySQL/PostgreSQL).",
        support: true,
        versions: {
          v11: v11_LBD(),
          v10: v10_LBD(),
          v8: v8_LBD(),
        },
      },
      "dependency-injection": {
        description: "Container for dependency injection with DI-PHP.",
        support: true,
        versions: {
          v4: v4_LDI(),
          v3: v3_LDI(),
          v2: v2_LDI(),
          v1: v1_LDI(),
        },
      },
      exceptions: {
        description: "Handling exceptions and serializations.",
        support: true,
        versions: {
          v2: v2_LE(),
          v1: v1_LE(),
        },
      },
      files: {
        description:
          "Library created with the function of working internal system files.",
        support: true,
        versions: {
          v8: v8_LF(),
          v7: v7_LF(),
          v6: v6_LF(),
          v5: v5_LF(),
          v4: v4_LF(),
        },
      },
      helpers: {
        description: "Library created to use helpers for strings and arrays",
        support: true,
        versions: {
          v5: v5_LH(),
          v4: v4_LH(),
          v3: v3_LH(),
          v2: v2_LH(),
        },
      },
      mailer: {
        description:
          "Library created to facilitate sending email based on different services.",
        support: true,
        versions: {
          v5: v5_LM(),
        },
      },
      request: {
        description:
          "Library created to request input data and response requests.",
        support: true,
        versions: {
          v7: v7_LR(),
          v6: v6_LR(),
          v5: v5_LR(),
        },
      },
      route: {
        description:
          "This library has quick router usage with regular expressions.",
        support: true,
        versions: {
          v12: v12_LRT(),
          v11: v11_LRT(),
          v10: v10_LRT(),
          v9: v9_LRT(),
          v8: v8_LRT(),
        },
      },
      security: {
        description:
          "Library created with the function of implementing AES and RSA Security functions for PHP, it also includes functions to create JWT.",
        support: true,
        versions: {
          v11: v11_LS(),
          v10: v10_LS(),
          v9: v9_LS(),
          v8: v8_LS(),
          v7: v7_LS(),
        },
      },
      spreadsheet: {
        description: "Library to facilitate the use of spreadsheet.",
        support: true,
        versions: {
          v4: v4_LSP(),
          v3: v3_LSP(),
          v2: v2_LSP(),
          v1: v1_LSP(),
        },
      },
      test: {
        description:
          "library to implement testing with helpers that allow easy testing with PHPUnit.",
          support: true,
          versions: {
          v3: v3_LT(),
          v2: v2_LT(),
          v1: v1_LT(),
        },
      },
    },
  };
}
