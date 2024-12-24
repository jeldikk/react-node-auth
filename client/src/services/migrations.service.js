export async function listMigrations(){
    try{
        const res = await fetch("/api/v1/migrations");
        const body = await res.json();

        return {
            status: res.ok,
            body
        }
    }
    catch(err){
        console.error(err)
    }
}