import { Fragment } from "react";
import LibraryTitle from "../../../../pages/components/LibraryTitle";
import Description from "../../../../pages/components/Description";
import CodeBlock from "../../../../pages/components/CodeBlock";
import Example from "../../../../pages/components/Example";
import PhpCodeBlock from "../../../../pages/components/CodeBlock/PhpCodeBlock";

export default function CommmonDatabase(driver) {
  return {
    AndInterface: {
      shared: ["MySQL", "PostgreSQL", "SQLite"],
      methods: {
        and: {
          name: "and",
          code: (
            <Fragment>
              <LibraryTitle className={driver} methodName={"and"} />

              <Description
                description={"Nests the AND statement in the current query."}
              />

              <CodeBlock
                language={"php"}
                content={`<?php

declare(strict_types=1);

namespace Lion\\Database\\Interface\\Drivers;

use Closure;

/**
 * Defines a method that adds the and condition to the current SQL statement
 *
 * @package Lion\\Database\\Interface\\Drivers
 */
interface AndInterface
{
    /**
     * Nests the AND statement in the current query
     *
     * * If the parameter is boolean, add the Where statement to the current
     * query
     * * If parameter is a function, adds a query group to the current statement
     * * If the parameter is a string, add the where statement and the column to
     * the current query
     *
     * @param Closure|string|bool $and [You can add a AND to the current
     * statement, group by group, or return the AND statement]
     *
     * @return static
     */
    public static function and(bool|Closure|string $and = true): static;
}
`}
              />

              <Example
                number={1}
                language="php"
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\${driver};

$user = ${driver}::connection('local')
    ->table('users')
    ->select()
    ->where()->equalTo('idusers', 1)
    ->and()->equalTo('create_at', '2025-01-22')
    ->get();

var_dump($user);
`}
              />

              <Example
                number={2}
                language="php"
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\${driver};

$user = ${driver}::connection('local')
    ->table('users')
    ->select()
    ->where()->equalTo('idusers', 1)
    ->and(function (): void {
        ${driver}::equalTo('create_at', '2025-01-22');
    }); // AND (create_at = '2025-01-22')
    ->get();

var_dump($user);
`}
              />
            </Fragment>
          ),
        },
      },
    },
    BulkInterface: {
      shared: ["MySQL", "PostgreSQL", "SQLite"],
      methods: {
        bulk: {
          name: "bulk",
          code: (
            <Fragment>
              <LibraryTitle className={driver} methodName="bulk" />

              <Description
                description={"Nesting multiple values in an insert run."}
              />

              <CodeBlock
                language={"php"}
                content={`<?php

declare(strict_types=1);

namespace Lion\\Database\\Interface\\Drivers;

/**
 * Defines a method for inserting multiple rows in one insert
 *
 * @package Lion\\Database\\Interface\\Drivers
 */
interface BulkInterface
{
    /**
     * Nesting multiple values in an insert run
     *
     * @param array<int, string> $columns [List of columns]
     * @param array<int, array<int|string, mixed>> $rows [Insertion rows]
     *
     * @return static
     */
    public static function bulk(array $columns, array $rows): static;
}
`}
              />

              <Example
                number={1}
                language="php"
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';
      
use Lion\\Database\\Drivers\\${driver};

$response = ${driver}::connection('local')
    ->table('users')
    ->bulk(['users_name', 'users_lastname'], [
        ['Sergio', 'Leon'],
        ['Emmanuel','Hernandez'],
        ['Santiago','Ospina'],
        ['Santiago','Correa'],
    ])
    ->execute();

var_dump($response);
`}
              />
            </Fragment>
          ),
        },
      },
    },
    DatabaseConfigInterface: {
      shared: ["MySQL", "PostgreSQL", "SQLite"],
      methods: {
        run: {
          name: "run",
          code: (
            <Fragment>
              <LibraryTitle className={driver} methodName="run" />

              <Description
                description={
                  "Initialize the connection data to use the service."
                }
              />

              <PhpCodeBlock
                content={`<?php

declare(strict_types=1);

namespace Lion\\Database\\Interface;

use InvalidArgumentException;

/**
 * Defines settings to manage database connections
 *
 * @package Lion\\Database\\Interface
 */
interface DatabaseConfigInterface
{
      /**
       * initialize the connection data to use the service
       *
       * @param array{
       *     default: string,
       *     connections: array<string, array{
       *          type: string,
       *          host?: string,
       *          port?: int,
       *          dbname: string,
       *          user?: string,
       *          password?: string,
       *          options?: array<int, int>
       *     }>
       * } $connections [List of available databases]
       *
       * @return DatabaseConfigInterface
       *
       * @throws InvalidArgumentException [If any initialization parameter is
       * invalid]
       */
      public static function run(array $connections): DatabaseConfigInterface;

      // ...
}
`}
              />

              <Example
                number={1}
                language={"php"}
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\${driver};

${driver}::run([
    'default' => 'local',
    'connections' => [
        'local' => [
            'type' => '...',
            'host' => 'localhost',
            'port' => 3306,
            'dbname' => 'database',
            'user' => 'root',
            'password' => 'password',
            'options' => [
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
                PDO::ATTR_EMULATE_PREPARES => false,
            ],
        ],
    ],
]);
`}
              />
            </Fragment>
          ),
        },
        connection: {
          name: "connection",
          code: (
            <Fragment>
              <LibraryTitle className={driver} methodName="connection" />

              <Description
                description={
                  "Changes the data of the current connection with those of the specified connection."
                }
              />

              <CodeBlock
                language={"php"}
                content={`<?php

declare(strict_types=1);

namespace Lion\\Database\\Interface;

use InvalidArgumentException;

/**
 * Defines settings to manage database connections
 *
 * @package Lion\\Database\\Interface
 */
interface DatabaseConfigInterface
{
    // ...

    /**
     * Changes the data of the current connection with those of the specified
     * connection
     *
     * @param string $connectionName [Connection name]
     *
     * @return DatabaseConfigInterface
     *
     * @throws InvalidArgumentException [If the connection does not exist]
     */
    public static function connection(string $connectionName): DatabaseConfigInterface;
}`}
              />

              <Example
                number={1}
                language="php"
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\${driver};

${driver}::connection('local');
`}
              />
            </Fragment>
          ),
        },
      },
    },
    DeleteInterface: {
      shared: ["MySQL", "PostgreSQL", "SQLite"],
      methods: {
        delete: {
          name: "delete",
          code: (
            <Fragment>
              <LibraryTitle className={driver} methodName={"delete"} />

              <Description
                description={"Nests the DELETE statement in the current query."}
              />

              <CodeBlock
                language={"php"}
                content={`<?php

declare(strict_types=1);

namespace Lion\\Database\\Interface\\Drivers;

/**
 * Declare a method that deletes data in SQL
 *
 * @package Lion\\Database\\Interface\\Drivers
 */
interface DeleteInterface
{
    /**
     * Nests the DELETE statement in the current query
     *
     * @return static
     */
    public static function delete(): static;
}`}
              />

              <Example
                number={1}
                language="php"
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\${driver};

$response = ${driver}::connection('local')
    ->table('users')
    ->delete()
    ->where()->equalTo('idusers', 1)
    ->execute();

var_dump($response);
`}
              />
            </Fragment>
          ),
        },
      },
    },
    EqualToInterface: {
      shared: ["MySQL", "PostgreSQL", "SQLite"],
      methods: {
        "equal-to": {
          name: "equalTo",
          code: (
            <Fragment>
              <LibraryTitle className={driver} methodName={"equalTo"} />

              <Description
                description={
                  'Adds an "equals to / =" to the current statement.'
                }
              />

              <PhpCodeBlock
                content={`<?php

declare(strict_types=1);

namespace Lion\\Database\\Interface\\Drivers;

/**
 * Defines a method to add the 'equal to / =' operator
 *
 * @package Lion\\Database\\Interface\\Drivers
 */
interface EqualToInterface
{
    /**
     * Adds an "equals to / =" to the current statement
     *
     * @param string $column [Column name]
     * @param mixed $equalTo [Equal to]
     *
     * @return static
     */
    public static function equalTo(string $column, mixed $equalTo): static;
}`}
              />

              <Example
                number={1}
                language={"php"}
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\${driver};

$user = ${driver}::connection('local')
->table('users')
->select()
->where()->equalTo('idusers', 1)
->get();

var_dump($user);
`}
              />
            </Fragment>
          ),
        },
      },
    },
    ExecuteInterface: {
      shared: ["MySQL", "PostgreSQL", "SQLite"],
      methods: {
        execute: {
          name: "execute",
          code: (
            <Fragment>
              <LibraryTitle className={driver} methodName="execute" />

              <Description description={"Execute the current query."} />

              <PhpCodeBlock
                content={`<?php

declare(strict_types=1);

namespace Lion\\Database\\Interface;

use PDOException;
use stdClass;

/**
 * Defines that the driver can perform executions on the databases
 *
 * @package Lion\\Database\\Interface
 */
interface ExecuteInterface
{
    /**
     * Execute the current query
     *
     * @return int|stdClass
     *
     * @throws PDOException [If the executed process fails]
     */
    public static function execute(): int|stdClass;
}`}
              />

              <Example
                number={1}
                language="php"
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\${driver};

$response = ${driver}::connection('local')
    ->query(
        <<<SQL
        INSERT INTO users (users_name) VALUES ('Sergio');
        SQL
    )
    ->execute();

var_dump($response);
`}
              />
            </Fragment>
          ),
        },
      },
    },
    GreaterThanInterface: {
      shared: ["MySQL", "PostgreSQL", "SQLite"],
      methods: {
        "greater-than": {
          name: "greaterThan",
          code: (
            <Fragment>
              <LibraryTitle className={driver} methodName={"greaterThan"} />

              <Description
                description={
                  'Adds a "greater than / >" to the current statement.'
                }
              />

              <PhpCodeBlock
                content={`<?php

declare(strict_types=1);

namespace Lion\Database\Interface\Drivers;

/**
 * Defines a method to add the 'greater than / >' operator
 *
 * @package Lion\Database\Interface\Drivers
 */
interface GreaterThanInterface
{
    /**
     * Adds a "greater than / >" to the current statement
     *
     * @param string $column [Column name]
     * @param mixed $greaterThan [Greather than]
     *
     * @return static
     */
    public static function greaterThan(string $column, mixed $greaterThan): static;
}
`}
              />

              <Example
                number={1}
                language={"php"}
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\${driver};

$user = ${driver}::connection('local')
    ->table('users')
    ->select()
    ->where()->greaterThan('idusers', 1)
    ->getAll();

var_dump($user);
`}
              />
            </Fragment>
          ),
        },
      },
    },
    GreaterThanOrEqualToInterface: {
      shared: ["MySQL", "PostgreSQL", "SQLite"],
      methods: {
        "greater-than-or-equal-to": {
          name: "greaterThanOrEqualTo",
          code: (
            <Fragment>
              <LibraryTitle
                className={driver}
                methodName={"greaterThanOrEqualTo"}
              />

              <Description
                description={
                  'Adds a "greater than or equal to / >=" to the current statement.'
                }
              />

              <PhpCodeBlock
                content={`<?php

declare(strict_types=1);

namespace Lion\Database\Interface\Drivers;

/**
 * Defines a method to add the 'greater than or equal to / >=' operator
 *
 * @package Lion\Database\Interface\Drivers
 */
interface GreaterThanOrEqualToInterface
{
    /**
     * Adds a "greater than or equal to / >=" to the current statement
     *
     * @param string $column [Column name]
     * @param mixed $greaterThanOrEqualTo [Greater than or equal to]
     *
     * @return static
     */
    public static function greaterThanOrEqualTo(string $column, mixed $greaterThanOrEqualTo): static;
}
`}
              />

              <Example
                number={1}
                language={"php"}
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\${driver};

$user = ${driver}::connection('local')
->table('users')
->select()
->where()->greaterThanOrEqualTo('idusers', 1)
->getAll();

var_dump($user);
`}
              />
            </Fragment>
          ),
        },
      },
    },
    InsertInterface: {
      shared: ["MySQL", "PostgreSQL", "SQLite"],
      methods: {
        insert: {
          name: "insert",
          code: (
            <Fragment>
              <LibraryTitle className={driver} methodName={"insert"} />

              <Description
                description={"Nests the INSERT statement in the current query."}
              />

              <PhpCodeBlock
                content={`<?php

declare(strict_types=1);

namespace Lion\\Database\\Interface\\Drivers;

/**
 * Implement a method to insert data into SQL
 *
 * @package Lion\\Database\\Interface\\Drivers
 */
interface InsertInterface
{
    /**
     * Nests the INSERT statement in the current query
     *
     * @param array<string, mixed> $rows [List of values]
     *
     * @return static
     */
    public static function insert(array $rows): static;
}`}
              />

              <Example
                number={1}
                language="php"
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\${driver} as DB;

$response = ${driver}::connection('local')
->table('users')
->insert([
    'users_name' => 'root',
    'users_date' => '2025-03-11',
    'users_phone' => '...',
])
->execute();

var_dump($response);
`}
              />
            </Fragment>
          ),
        },
      },
    },
    LessThanInterface: {
      shared: ["MySQL", "PostgreSQL", "SQLite"],
      methods: {
        "less-than": {
          name: "lessThan",
          code: (
            <Fragment>
              <LibraryTitle className={driver} methodName={"lessThan"} />

              <Description
                description={'Adds a "less than / <" to the current statement.'}
              />

              <PhpCodeBlock
                content={`<?php

declare(strict_types=1);

namespace Lion\Database\Interface\Drivers;

/**
 * Defines a method to add the 'less than / <' operator
 *
 * @package Lion\Database\Interface\Drivers
 */
interface LessThanInterface
{
    /**
     * Adds a "less than / <" to the current statement
     *
     * @param string $column [Column name]
     * @param mixed $lessThan [Less than]
     *
     * @return static
     */
    public static function lessThan(string $column, mixed $lessThan): static;
}
`}
              />

              <Example
                number={1}
                language={"php"}
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\${driver};

$user = ${driver}::connection('local')
->table('users')
->select()
->where()->lessThan('idusers', 100)
->getAll();

var_dump($user);
`}
              />
            </Fragment>
          ),
        },
      },
    },
    LessThanOrEqualToInterface: {
      shared: ["MySQL", "PostgreSQL", "SQLite"],
      methods: {
        "less-than-or-equal-to": {
          name: "lessThanOrEqualTo",
          code: (
            <Fragment>
              <LibraryTitle
                className={driver}
                methodName={"lessThanOrEqualTo"}
              />

              <Description
                description={
                  'Adds a "less than or equal to / <=" to the current statement.'
                }
              />

              <PhpCodeBlock
                content={`<?php
  
declare(strict_types=1);

namespace Lion\Database\Interface\Drivers;

/**
 * Defines a method to add the 'less than or equal to / <=' operator
 *
 * @package Lion\Database\Interface\Drivers
 */
interface LessThanOrEqualToInterface
{
    /**
     * Adds a "less than or equal to / <=" to the current statement
     *
     * @param string $column [Column name]
     * @param mixed $lessThanOrEqualTo [Less than or equal to]
     *
     * @return static
     */
    public static function lessThanOrEqualTo(string $column, mixed $lessThanOrEqualTo): static;
}
  `}
              />

              <Example
                number={1}
                language={"php"}
                content={`<?php
  
declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\${driver};

$user = ${driver}::connection('local')
    ->table('users')
    ->select()
    ->where()->lessThanOrEqualTo('idusers', 100)
    ->getAll();

var_dump($user);
`}
              />
            </Fragment>
          ),
        },
      },
    },
    NotEqualToInterface: {
      shared: ["MySQL", "PostgreSQL", "SQLite"],
      methods: {
        "not-equal-to": {
          name: "notEqualTo",
          code: (
            <Fragment>
              <LibraryTitle className={driver} methodName={"notEqualTo"} />

              <Description
                description={
                  'Adds a "not equal to / <>" to the current statement.'
                }
              />

              <PhpCodeBlock
                content={`<?php
  
declare(strict_types=1);

namespace Lion\Database\Interface\Drivers;

/**
 * Defines a method to add the 'not equal to / <>' operator
 *
 * @package Lion\Database\Interface\Drivers
 */
interface NotEqualToInterface
{
    /**
     * Adds a "not equal to / <>" to the current statement
     *
     * @param string $column [Column name]
     * @param mixed $notEqualTo [Not equal to]
     *
     * @return static
     */
    public static function notEqualTo(string $column, mixed $notEqualTo): static;
}
  `}
              />

              <Example
                number={1}
                language={"php"}
                content={`<?php
  
declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\${driver};

$user = ${driver}::connection('local')
    ->table('users')
    ->select()
    ->where()->notEqualTo('idusers', 1)
    ->getAll();

var_dump($user);
  `}
              />
            </Fragment>
          ),
        },
      },
    },
    OnUpdateInterface: {
      shared: ["MySQL"],
      methods: {
        "on-update": {
          name: "onUpdate",
          code: (
            <Fragment>
              <LibraryTitle className={driver} methodName={"onUpdate"} />

              <Description
                description={
                  "Nests the ON UPDATE statement in the current query."
                }
              />

              <PhpCodeBlock
                content={`<?php
  
declare(strict_types=1);

namespace Lion\\Database\\Interface\\Drivers;

/**
 * Add ON UPDATE function in SQL query
 *
 * @package Lion\\Database\\Interface\\Drivers
 */
interface OnUpdateInterface
{
      /**
       * Nests the ON UPDATE statement in the current query
       *
       * @param string|null $onUpdate [Nested parameter in ON UPDATE]
       *
       * @return static
       */
      public static function onUpdate(?string $onUpdate = null): static;
}
  `}
              />

              <Example
                number={1}
                language={"php"}
                content={`<?php
  
require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\${driver};

${driver}::onUpdate();
`}
              />

              <Example
                number={2}
                language={"php"}
                content={`<?php

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\${driver};

${driver}::onUpdate('CURRENT_TIMESTAMP');
`}
              />
            </Fragment>
          ),
        },
      },
    },
    OrInterface: {
      shared: ["MySQL", "PostgreSQL", "SQLite"],
      methods: {
        or: {
          name: "or",
          code: (
            <Fragment>
              <LibraryTitle className={driver} methodName={"or"} />

              <Description
                description={"Nests the OR statement in the current query."}
              />

              <PhpCodeBlock
                content={`<?php
  
declare(strict_types=1);

namespace Lion\\Database\\Interface\\Drivers;

use Closure;

/**
 * Defines a method that adds the or condition to the current SQL statement
 *
 * @package Lion\\Database\\Interface\\Drivers
 */
interface OrInterface
{
      /**
       * Nests the OR statement in the current query
       *
       * * If the parameter is boolean, add the Where statement to the current
       * query
       * * If parameter is a function, adds a query group to the current statement
       * * If the parameter is a string, add the where statement and the column to
       * the current query
       *
       * @param bool|Closure|string $or [You can add a OR to the current
       * statement, group by group, or return the OR statement]
       *
       * @return static
       */
      public static function or(bool|Closure|string $or = true): static;
}
`}
              />

              <Example
                number={1}
                language="php"
                content={`<?php
  
declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\${driver};

$user = ${driver}::connection('local')
    ->table('users')
    ->select()
    ->where()->equalTo('idusers', 1)
    ->or()->equalTo('idusers', 2)
    ->get();

var_dump($user);
  `}
              />

              <Example
                number={2}
                language="php"
                content={`<?php
  
  declare(strict_types=1);
  
  require_once __DIR__ . '/vendor/autoload.php';
  
  use Lion\\Database\\Drivers\\${driver} as DB;
  
  $user = ${driver}::connection('local')
    ->table('users')
    ->select()
    ->where()->equalTo('idusers', 1)
    ->or(function (): void {
        DB::equalTo('idusers', 2);
    }); // OR (idusers = 2)
    ->get();
  
  var_dump($user);
  `}
              />
            </Fragment>
          ),
        },
      },
    },
    QueryInterface: {
      shared: ["MySQL", "PostgreSQL", "SQLite"],
      methods: {
        query: {
          name: "query",
          code: (
            <Fragment>
              <LibraryTitle className={driver} methodName={"query"} />

              <Description
                description={"Nests the QUERY statement in the current query."}
              />

              <PhpCodeBlock
                content={`<?php

declare(strict_types=1);

namespace Lion\\Database\\Interface;

/**
 * Generic function to execute a SQL statement
 *
 * @package Lion\\Database\\Interface
 */
interface QueryInterface
{
      /**
       * The defined sentence alludes to the current sentence
       *
       * @param string $sql [Defined sentence]
       *
       * @return QueryInterface
       */
      public static function query(string $sql): QueryInterface;
}
`}
              />

              <Example
                number={1}
                language="php"
                content={`<?php
  
  declare(strict_types=1);
  
  require_once __DIR__ . '/vendor/autoload.php';
  
  use Lion\\Database\\Drivers\\${driver};
  
  $response = ${driver}::connection('local')
    ->query(
        <<<SQL
        INSERT INTO users (users_name) VALUES ('Sergio');
        SQL
    )
    ->execute();
  
  var_dump($response);
  `}
              />
            </Fragment>
          ),
        },
      },
    },
    ReadDatabaseDataInterface: {
      shared: ["MySQL", "PostgreSQL", "SQLite"],
      methods: {
        get: {
          name: "get",
          code: (
            <Fragment>
              <LibraryTitle className={driver} methodName="get" />

              <Description description={"Run and get an object from a row."} />

              <PhpCodeBlock
                content={`<?php

declare(strict_types=1);

namespace Lion\\Database\\Interface;

use PDOException;
use stdClass;

/**
 * Defines that the driver can make queries to databases
 *
 * @package Lion\\Database\\Interface
 */
interface ReadDatabaseDataInterface
{
      /**
       * Run and get an object from a row
       *
       * @return array<int|string, mixed>|DatabaseCapsuleInterface|stdClass
       *
       * @throws PDOException
       */
      public static function get(): array|DatabaseCapsuleInterface|stdClass;

    // ...
}
`}
              />

              <Example
                number={1}
                language={"php"}
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\${driver};

$user = ${driver}::connection('local')
    ->query(
        <<<SQL
        SELECT * FROM users WHERE idusers = 1;
        SQL
    )
    ->get();

var_dump($user);
`}
              />

              <Example
                number={2}
                language={"php"}
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\${driver};

$user = ${driver}::connection('local')
    ->table('users')
    ->select()
    ->where()->equalTo('idusers', 1)
    ->get();

var_dump($user);
`}
              />

              <Example
                number={3}
                language={"php"}
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\${driver};

$user = ${driver}::connection('local')
    ->table('users')
    ->select('users_name', 'users_lastname')
    ->where()->equalTo('idusers', 1)
    ->get();

var_dump($user);
`}
              />
            </Fragment>
          ),
        },
        "get-all": {
          name: "getAll",
          code: (
            <Fragment>
              <LibraryTitle className={driver} methodName="getAll" />

              <Description description={"Run and get an array of objects."} />

              <PhpCodeBlock
                content={`<?php

declare(strict_types=1);

namespace Lion\\Database\\Interface;

use PDOException;
use stdClass;

/**
 * Defines that the driver can make queries to databases
 *
 * @package Lion\\Database\\Interface
 */
interface ReadDatabaseDataInterface
{
      // ...

      /**
       * Run and get an array of objects
       *
       * @return array<int, array<int|string, mixed>|DatabaseCapsuleInterface|stdClass>|stdClass
       *
       * @throws PDOException
       */
      public static function getAll(): array|stdClass;
}
`}
              />

              <Example
                number={1}
                language={"php"}
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\${driver};

$users = ${driver}::connection('local')
    ->query(
        <<<SQL
        SELECT * FROM users;
        SQL
    )
    ->getAll();

var_dump($users);
`}
              />

              <Example
                number={2}
                language={"php"}
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\${driver};

$users = ${driver}::connection('local')
    ->table('users')
    ->select()
    ->getAll();

var_dump($users);
`}
              />

              <Example
                number={3}
                language={"php"}
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\${driver};

$users = ${driver}::connection('local')
    ->table('users')
    ->select('users_name', 'users_lastname')
    ->getAll();

var_dump($users);
`}
              />
            </Fragment>
          ),
        },
      },
    },
    RowCountInterface: {
      shared: ["MySQL", "PostgreSQL", "SQLite"],
      methods: {
        "row-count": {
          name: "rowCount",
          code: (
            <Fragment>
              <LibraryTitle className={driver} methodName="rowCount" />

              <Description description={"Run and get an object from a row."} />

              <PhpCodeBlock
                content={`<?php

declare(strict_types=1);

namespace Lion\\Database\\Interface;

/**
 * Defines the implementation of the PDO rowCount function
 *
 * @package Lion\\Database\\Interface
 */
interface RowCountInterface
{
      /**
       * Returns the number of rows affected by the last SQL statement
       *
       * @return static
       */
      public function rowCount(): static;
}
`}
              />

              <Example
                number={1}
                language={"php"}
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\${driver};

$affected = ${driver}::connection('local')
    ->query(
        <<<SQL
        DELETE FROM users WHERE idusers = 1;
        SQL
    )
    ->rowCount();

var_dump($affected);
`}
              />

              <Example
                number={2}
                language={"php"}
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\${driver};

$affected = ${driver}::connection('local')
    ->table('users')
    ->delete()
    ->where()->equalTo('idusers', 1)
    ->rowCount();

var_dump($affected);
`}
              />
            </Fragment>
          ),
        },
      },
    },
    SchemaDriverInterface: {
      shared: ["MySQL"],
      methods: {
        "is-schema": {
          name: "isSchema",
          code: (
            <Fragment>
              <LibraryTitle className={driver} methodName="isSchema" />

              <Description
                description={
                  "Activate the configuration to run a process at the Schema level in the service."
                }
              />

              <PhpCodeBlock
                content={`<?php

declare(strict_types=1);

namespace Lion\\Database\\Interface;

/**
 * Defines the configuration to determine that a driver has schematic functions
 *
 * @package Lion\\Database\\Interface
 */
interface SchemaDriverInterface
{
      /**
       * Activate the configuration to run a process at the Schema level in the
       * service
       *
       * @return static
       */
      public static function isSchema(): static;

      // ...
}`}
              />

              <Example
                number={1}
                language={"php"}
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\${driver};

${driver}::connection('local')
    ->isSchema();
`}
              />
            </Fragment>
          ),
        },
        "enable-insert": {
          name: "enableInsert",
          code: (
            <Fragment>
              <LibraryTitle className={driver} methodName="enableInsert" />

              <Description
                description={
                  "Enable the setting for nesting insert statements."
                }
              />

              <PhpCodeBlock
                content={`<?php

declare(strict_types=1);

namespace Lion\\Database\\Interface;

/**
 * Defines the configuration to determine that a driver has schematic functions
 *
 * @package Lion\\Database\\Interface
 */
interface SchemaDriverInterface
{
    // ...

    /**
     * Enable the setting for nesting insert statements
     *
     * @param bool $enable [Defines whether the values integrated into bindValue
     * are concatenated]
     *
     * @return static
     */
    public static function enableInsert(bool $enable = false): static;
}
`}
              />

              <Example
                number={1}
                language={"php"}
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\${driver};

${driver}::connection('local')
    ->enableInsert();
`}
              />
            </Fragment>
          ),
        },
      },
    },
    SelectInterface: {
      shared: ["MySQL", "PostgreSQL", "SQLite"],
      methods: {
        select: {
          name: "select",
          code: (
            <Fragment>
              <LibraryTitle className={driver} methodName="select" />

              <Description
                description={"Nests the SELECT statement in the current query."}
              />

              <PhpCodeBlock
                content={`<?php

declare(strict_types=1);

namespace Lion\\Database\\Interface\\Drivers;

/**
 * Implements a method to select data in SQL queries
 *
 * @package Lion\\Database\\Interface\\Drivers
 */
interface SelectInterface
{
      /**
       * Nests the SELECT statement in the current query
       *
       * @return static
       */
      public static function select(): static;
}
`}
              />

              <Example
                number={1}
                language="php"
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\${driver};

$users = ${driver}::connection('local')
    ->table('users')
    ->select()
    ->getAll();

var_dump($users);
`}
              />
            </Fragment>
          ),
        },
      },
    },
    TableInterface: {
      shared: ["MySQL", "PostgreSQL", "SQLite"],
      methods: {
        table: {
          name: "table",
          code: (
            <Fragment>
              <LibraryTitle className={driver} methodName={"table"} />

              <Description
                description={"Nests the TABLE statement in the current query."}
              />

              <PhpCodeBlock
                content={`<?php

declare(strict_types=1);

namespace Lion\Database\Interface\Drivers;

use Lion\\Database\\Drivers\\MySQL;

/**
 * Declare a method to define a table
 *
 * @package Lion\\Database\\Interface\\Drivers
 */
interface TableInterface
{
      /**
       * Nests the TABLE statement in the current query
       *
       * @param string|bool $table [Nests the table in the current query or nests
       * the TABLE statement in the current query]
       * @param bool $withDatabase [Determines whether to nest the current
       * database in the table]
       *
       * @return static
       */
      public static function table(string|bool $table = true, bool $withDatabase = false): static;
}
`}
              />

              <Example
                number={1}
                language="php"
                content={`<?php

use Lion\\Database\\Drivers\\${driver};

$data = ${driver}::table('users')
    ->select()
    ->getAll();

var_dump($data);
`}
              />

              <Example
                number={2}
                language="php"
                content={`<?php

use Lion\\Database\\Drivers\\${driver};

${driver}::table();
`}
              />
            </Fragment>
          ),
        },
      },
    },
    TransactionInterface: {
      shared: ["MySQL", "PostgreSQL", "SQLite"],
      methods: {
        transaction: {
          name: "transaction",
          code: (
            <Fragment>
              <LibraryTitle className={driver} methodName="transaction" />

              <Description
                description={
                  "Activate the configuration to execute a transaction type process in the service."
                }
              />

              <PhpCodeBlock
                content={`<?php

declare(strict_types=1);

namespace Lion\\Database\\Interface;

/**
 * Defines a driver with transaction functions
 *
 * @package Lion\\Database\\Interface
 */
interface TransactionInterface
{
      /**
       * Activate the configuration to execute a transaction type process in the
       * service
       *
       * @param bool $isTransaction [Defines whether the process is a transaction]
       *
       * @return TransactionInterface
       */
      public static function transaction(bool $isTransaction = true): TransactionInterface;
}
`}
              />

              <Example
                number={1}
                language="php"
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\${driver};

${driver}::connection('local')
    ->transaction();
`}
              />
            </Fragment>
          ),
        },
      },
    },
    UpdateInterface: {
      shared: ["MySQL", "PostgreSQL", "SQLite"],
      methods: {
        update: {
          name: "update",
          code: (
            <Fragment>
              <LibraryTitle className={driver} methodName={"update"} />

              <Description
                description={"Nests the UPDATE statement in the current query."}
              />

              <PhpCodeBlock
                content={`<?php

declare(strict_types=1);

namespace Lion\\Database\\Interface\\Drivers;

/**
 * Declare a method that updates data in SQL
 *
 * @package Lion\\Database\\Interface\\Drivers
 */
interface UpdateInterface
{
      /**
       * Nests the UPDATE statement in the current query
       *
       * @param array<string, mixed> $rows [List of values]
       *
       * @return static
       */
      public static function update(array $rows): static;
}`}
              />

              <Example
                number={1}
                language="php"
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\${driver};

$response = ${driver}::connection('local')
    ->table('users')
    ->update([
        'users_name' => 'root',
        'users_date' => '1999-01-01',
        'users_phone' => '...',
    ])
    ->where()->equalTo('idusers', 1)
    ->execute();

var_dump($response);
`}
              />
            </Fragment>
          ),
        },
      },
    },
    WhereInterface: {
      shared: ["MySQL", "PostgreSQL", "SQLite"],
      methods: {
        where: {
          name: "where",
          code: (
            <Fragment>
              <LibraryTitle className={driver} methodName={"where"} />

              <Description
                description={"Nests the WHERE statement in the current query."}
              />

              <PhpCodeBlock
                content={`<?php

declare(strict_types=1);

namespace Lion\\Database\\Interface\\Drivers;

use Closure;

/**
 * Defines a method that adds the where condition to the current SQL statement
 *
 * @package Lion\\Database\\Interface\\Drivers
 */
interface WhereInterface
{
      /**
       * Nests the WHERE statement in the current query
       *
       * * If the parameter is boolean, add the Where statement to the current
       * query
       * * If parameter is a function, adds a query group to the current statement
       * * If the parameter is a string, add the where statement and the column to
       * the current query
       *
       * @param bool|Closure|string $where [You can add a WHERE to the current
       * statement, group by group, or return the WHERE statement]
       *
       * @return static
       */
      public static function where(bool|Closure|string $where = true): static;
}
`}
              />

              <Example
                number={1}
                language="php"
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\${driver};

$user = ${driver}::table('users')
    ->select()
    ->where()->equalTo('idusers', 1)
    ->get();

var_dump($user);
`}
              />

              <Example
                number={2}
                language="php"
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\${driver};

$user = ${driver}::connection('local')
    ->table('users')
    ->select()
    ->where(function (): void {
        ${driver}::equalTo('idusers', 1);
    }) // WHERE (idusers = 1)
    ->get();

var_dump($user);
`}
              />
            </Fragment>
          ),
        },
      },
    },
  };
}
