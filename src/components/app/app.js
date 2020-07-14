import React, { Component } from "react";
import AppHeader from "../app-header/app-header";
import SearchPanel from "../search-panel/search-panel";
import PostStatusFilter from "../post-status-filter/post-status-filter";
import PostList from "../post-list/post-list";
import PostAddForm from "../post-add-form/post-add-form";
import "./app.css";

export default class App extends Component {
  state = {
    data: [
      { label: "Going to learn React", important: true, like: false },
      { label: "That is so good", important: false, like: false },
      { label: "I need a break...", important: false, like: false },
    ],
    term: "",
    filter: "all",
  };

  deleteItem = (id) => {
    const data = this.state.data.concat();

    data.splice(id, 1);

    this.setState({
      data,
    });
  };

  addItem = (body) => {
    const newItem = {
      label: body,
      important: false,
    };

    const data = this.state.data.concat();
    data.push(newItem);
    this.setState({
      data,
    });
  };

  onToggleImportant = (id) => {
    const data = this.state.data.concat();
    const post = data.find((elem, index) => index === id);
    post.important = !post.important;
    this.setState({
      data,
    });
  };

  onToggleLiked = (id) => {
    const data = this.state.data.concat();
    const post = data.find((elem, index) => index === id);
    post.like = !post.like;
    this.setState({
      data,
    });
  };

  searchPost = (items, term) => {
    if (term.length === 0) {
      return items;
    }
    return items.filter((item) => {
      return item.label.indexOf(term) > -1;
    });
  };

  filterPosts = (items, filter) => {
    if (filter === "like") {
      return items.filter((item) => item.like);
    } else {
      return items;
    }
  };

  onUpdateSearch = (term) => {
    this.setState({ term });
  };

  onFilterSelect = (filter) => {
    this.setState({ filter });
  };
  render() {
    const { data, term, filter } = this.state;
    const liked = data.filter((item) => item.like).length;
    const allPosts = data.length;

    const visiblePosts = this.filterPosts(this.searchPost(data, term), filter);

    return (
      <div className="app">
        <AppHeader liked={liked} allPosts={allPosts} />
        <div className="search-panel d-flex">
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <PostStatusFilter
            filter={filter}
            onFilterSelect={this.onFilterSelect}
          />
        </div>
        <PostList
          posts={visiblePosts}
          onDelete={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleLiked={this.onToggleLiked}
        />
        <PostAddForm onAdd={this.addItem} />
      </div>
    );
  }
}
