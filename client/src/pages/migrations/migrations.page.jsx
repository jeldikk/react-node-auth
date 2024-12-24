import { useEffect, useState } from "react";
import { Spinner, Container, Button } from "react-bootstrap";
import { listMigrations } from "../../services/migrations.service";
import MigrationsList from "../../components/migrations/migrations-list.component";

export default function MigrationsPage(){
    const [migrations, setMigrations] = useState([]);
    const [loading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        listMigrations()
            .then((data) => {
                if(data.status){
                    setMigrations(data.body)
                }
            })
            .catch((err) => {
                console.error(err)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }, [])

    if(loading){
        return (
            <div className='vh-100 vw-100 d-flex justify-content-center align-items-center'>
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
        )
    }

    return <Container>
        <div className="heading d-flex justify-content-around">
            <h3 className="px-3 py-2">Migrations</h3>
            <Button variant="outline-warning" size="sm">Add New Migration</Button>
        </div>
        <div className="migrations-list">
            <MigrationsList migrations={migrations} />
        </div>
    </Container>
}