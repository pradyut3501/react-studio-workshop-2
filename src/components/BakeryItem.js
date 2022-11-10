// TODO: create a component that displays a single bakery item
export default function BakeryItem(props) {

    const handleClick = () => {
        props.setItems([...props.items, props.name])
        props.updatePrice(props.totalPrice + props.price)
    }

	return (
		<div class="BakeryItem">
			<h3>{props.name}</h3>
            <p>{props.description}</p>
            <p>{props.price}</p>
            <img src={props.image} width="200rem" height="150rem"></img>
            <br></br>
            <button onClick={handleClick} class="button">Add Item</button>
		</div>
	);
}

