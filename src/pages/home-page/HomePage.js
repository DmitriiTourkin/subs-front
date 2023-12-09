import './styles/home-page.css'
import NavigationBar from "../../components/NavigationBar";
import SubsBlock from "../../components/SubsBlock/SubsBlock";

export default function HomePage() {
    return (
        <>
            <NavigationBar/>
            <SubsBlock title='Финансовые операции'/>
            <SubsBlock title='Музыкальные сервисы'/>
            <SubsBlock title='Развлечения'/>
        </>

    );

}