type Props = {
    title: string;
    start: string;
    end: string;
    items: string[];
};

const Item = (props: Props) => {
    return (
        <div className="p-4 w-full">
            <p className="p-1 w-fit font-bold text-[#F9DEC9]">{props.title}</p>
            <p className="p-1 w-fit text-sm text-[#F9DEC9]">{props.start}- {props.end}</p>
            <ul className="list-disc">
                {props.items.map((item) => (<li className="p-1 text-[#F9DEC9]">{item}</li>))}
            </ul>
        </div>
    );
};

export default Item;