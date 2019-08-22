//InitialItem
const initialItem = {
    id: '',
    title: '',
    director:'',
    metascore:'',
    stars:[]

};

//creating update form
const updateForm = props => {
    //creating states
    const [movie, setMovie]= useState(initialItem);
    useEffect(() => {
        const id = props.match.params.id;
        const ItemInArr = props.items.find(item => `${item.id}` === id);
        if (ItemInArr) setItem(ItemInArr); 
    },[props.items, props.match.params.id])
    //creating change handler
    const handleChange = event => {
        setMovie({
            ...movie,
            [event.target.name]:event.target.value
        })

    }
    //creating handle submit
    const handleSubmit = event => {
        event.preventDefault();
        axios
          .put(`http://localhost:5000/api/movies/${item.id}`, item)
          .then(res => {
            console.log(res);
            setItem(initialItem);
            props.updateItems(res.data);
            props.history.push('/item-list');
          })
          .catch(err => console.log(err.response));
      };
      //returning form
      return (
        <div>
          <h2>Update Item</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              onChange={changeHandler}
              placeholder="name"
              value={item.name}
            />
            <div className="baseline" />
    
            <input
              type="number"
              name="price"
              onChange={changeHandler}
              placeholder="Price"
              value={item.price}
            />
            <div className="baseline" />
    
            <input
              type="string"
              name="imageUrl"
              onChange={changeHandler}
              placeholder="Image"
              value={item.imageUrl}
            />
            <div className="baseline" />
    
            <input
              type="string"
              name="description"
              onChange={changeHandler}
              placeholder="Description"
              value={item.description}
            />
            <div className="baseline" />
    
            <input
              type="string"
              name="shipping"
              onChange={changeHandler}
              placeholder="Shipping"
              value={item.shipping}
            />
            <div className="baseline" />
    
            <button className="md-button form-button">Update</button>
          </form>
        </div>
      );
}