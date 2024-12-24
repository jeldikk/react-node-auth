import PropTypes from "prop-types";
import { DropdownButton, Dropdown, ButtonGroup } from "react-bootstrap";
export default function MigrationsItem(props){
    const {migration} = props;
    // const {sourceNamespace, sourceCluster, targetNamespace, targetCluster} = migration;

    return <tr>
        <td>{migration.sourceNamespace}</td>
        <td>{migration.sourceCluster}</td>
        <td>{migration.targetNamespace}</td>
        <td>{migration.targetCluster}</td>
        <td>
            <DropdownButton
                as={ButtonGroup}
                id="actions-dropdown"
                variant="primary"
                title="Actions"
                size="sm"
            >
                <Dropdown.Item eventKey="1">Edit</Dropdown.Item>
                <Dropdown.Item eventKey="2">Show Details</Dropdown.Item>
                <Dropdown.Item eventKey="3">Show Log</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="4">Run</Dropdown.Item>
            </DropdownButton>
        </td>
    </tr>
}

MigrationsItem.propTypes = {
    migration: PropTypes.shape({
        sourceNamespace: PropTypes.string.isRequired,
        sourceCluster: PropTypes.string.isRequired,
        targetCluster: PropTypes.string.isRequired,
        targetNamespace: PropTypes.string.isRequired
    })
}