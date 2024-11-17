import React from "react";
import {Link} from "react-router-dom";

class AddContact extends React.Component {
  state = {
    name: "",
    email: "",
    message: "", // Estado para armazenar a mensagem
  };

  add = (e) => {
    e.preventDefault();

    // Verifica se os campos estão preenchidos
    if (this.state.name === "" || this.state.email === "") {
      alert("All the fields are mandatory");
      return;
    }

    // Adiciona o contato
    this.props.AddContactHandler(this.state);

    // Limpa os campos
    this.setState({ name: "", email: "" });

    // Exibe a mensagem de sucesso
    this.setState({ message: "Contact added successfully!" });

    // Limpa a mensagem após 3 segundos (opcional)
    setTimeout(() => {
      this.setState({ message: "" });
    }, 3000);
  };

  render() {
    return (
      <div className="ui main">
        <h2>Add Contact</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
          <button className="ui button blue">Add</button>
          <Link to="/">
                    <button className="ui button blue right">return</button>
                </Link>
        </form>

        {/* Condicionalmente exibe a mensagem se houver uma */}
        {this.state.message && (
          <div className="ui message success">{this.state.message}</div>
        )}
      </div>
    );
  }
}

export default AddContact;
