import { clientHandled } from "./Service";
import '../scss/clientsHandled.scss';

const ClientsHandled = () => {
    return(
        <div className="container ClientsHandledWrap">
            <div className="clientWrap">
                {
                    clientHandled.map((clientName, clientIdx) => {
                        return(
                            <p key={clientIdx}>{clientName.name}</p>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ClientsHandled;