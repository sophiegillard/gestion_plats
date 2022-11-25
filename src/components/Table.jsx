export const Table = () =>{
    return (
        <>
        <main className="table"> 
            <h2 className="table__title">Gestion des plats</h2>

            <div className="table__container table">

                <div className="table-header-group ">
                    <div className="table-row">
                        <div className="table-cell text-left"></div>
                        <div className="table-cell text-left">Nom</div>
                        <div className="table-cell text-left">Fournisseur</div>
                        <div className="table-cell text-left">Catégorie</div>
                        <div className="table-cell text-left">Prix</div>
                        <div className="table-cell text-left">Action</div>
                    </div>
                </div>

                <div className="table-row-group">
                    <div className="table-row">
                        <input type="checkbox"></input>
                        <div className="table-cell">Pizza</div>
                        <div className="table-cell">Sysco</div>
                        <div className="table-cell">Plat chaud</div>
                        <div className="table-cell">Prix</div>
                        <button type="submit">ok</button>
                    </div>
                
                </div>

            </div>
        </main>
        </>
    )
}