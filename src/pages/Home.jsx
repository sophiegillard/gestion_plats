import { Table } from '../components/Table'
import { AjoutPlat } from '../components/AjoutPlat'
import { SuccessModal } from '../components/SuccessModal'

export const Home = () => {
    return (<>
        <h1> Home </h1>
        <Table />
        <AjoutPlat />
        <SuccessModal />
        </>);
}