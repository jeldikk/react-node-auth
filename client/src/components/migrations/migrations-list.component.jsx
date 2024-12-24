import { Table } from "react-bootstrap"
import MigrationsItem from "./migrations-item.component";
import PropTypes from "prop-types";

export default function MigrationsList(props){
    const {migrations} = props;

    return <Table striped bordered hover>
        <thead>
            <tr>
                <th>Source Namespace</th>
                <th>Source Cluster</th>
                <th>Target Namespace</th>
                <th>Target Cluster</th>
                <th>Settings</th>
            </tr>
        </thead>
        <tbody>
            {
                migrations.map((migration, index) => <MigrationsItem key={index} migration={migration} />)
            }
        </tbody>
    </Table>
}

MigrationsList.propTypes = {
    migrations: PropTypes.array
}