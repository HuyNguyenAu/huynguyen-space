type Props = {
    title: string;
    company: string;
    start: string;
    end: string;
    items: string[];
};

const Item = (props: Props) => {
    return (
        <>
            <h3>{props.title}</h3>
            <small>{props.company} | {props.start} - {props.end}</small>
            <ul>
                {props.items.map((item, index) => (<li key={`item-${index}`}>{item}</li>))}
            </ul>
        </>
    );
};

export default Item;