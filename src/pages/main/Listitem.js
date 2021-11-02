const ListItem = () => {
    return (
        <>
            <div className="row justify-content-center">
                <div className="col-sm-4 mt-5">
                    <div className="d-flex form-control">
                        <span>Bike</span><button type="button" className="btn btn-success mx-5">Vote</button>
                    </div>
                    <div className="d-flex form-control">
                        <span>Car</span><button type="button" className="btn btn-success mx-5">Vote</button>
                    </div>
                    <div className="d-flex form-control">
                        <span>Bus</span><button type="button" className="btn btn-success mx-5">Vote</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ListItem;