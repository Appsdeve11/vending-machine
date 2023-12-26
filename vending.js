// Create a Snack component
const Snack = ({ name, description, goBack }) => {
    return (
      <div>
        <h2>{name}</h2>
        <p>{description}</p>
        <button onClick={goBack}>Go Back</button>
      </div>
    );
  };
  
 
  class VendingMachine extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        snacks: [
          { id: 1, name: "Chips", description: "Delicious potato chips" },
          { id: 2, name: "Candy", description: "Sweet and chewy candy" },
          { id: 3, name: "Soda", description: "Refreshing fizzy drink" },
        ],
        selectedSnack: null,
      };
    }
    
    handleSelectSnack = (snack) => {
      this.setState({ selectedSnack: snack });
      window.history.pushState(null, "", `/${snack.id}`);
    };
  
    handleGoBack = () => {
      this.setState({ selectedSnack: null });
      window.history.pushState(null, "", "/");
    };
  
    render() {
      const { snacks, selectedSnack } = this.state;
  
      
      if (selectedSnack) {
        return (
          <Snack
            name={selectedSnack.name}
            description={selectedSnack.description}
            goBack={this.handleGoBack}
          />
        );
      }
  
      return (
        <div>
          <h1>Vending Machine</h1>
          <ul>
            {snacks.map((snack) => (
              <li key={snack.id}>
                <button onClick={() => this.handleSelectSnack(snack)}>
                  {snack.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      );
    }
  }
  
  ReactDOM.render(<VendingMachine />, document.getElementById("root"));