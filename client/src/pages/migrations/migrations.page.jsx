import { useEffect, useState } from "react";
import { listMigrations } from "../../services/migrations.service";

export default function MigrationsPage(){
    const [migrations, setMigrations] = useState([]);

    useEffect(() => {
        listMigrations()
            .then((data) => {
                if(data.status){
                    setMigrations(data.body)
                }
            })
    }, [])

    return <div>
        <h1 className="text-center">Migrations</h1>
    </div>
}