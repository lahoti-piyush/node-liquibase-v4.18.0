import { join } from 'path';
import { LiquibaseConfig } from '../../models';

export const MYSQL_DEFAULT_CONFIG: LiquibaseConfig = {
  changeLogFile: '/node_modules/examples/change-log-examples/postgreSQL/changelog.xml',
  url: 'jdbc:mysql://localhost:3306/mysql',
  username: 'mysql',
  password: '',
  classpath: join(__dirname, 'drivers/mysql-connector-j-8.0.31.jar'),
};
