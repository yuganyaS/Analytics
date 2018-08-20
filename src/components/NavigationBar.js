import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import languages from '../json/language';
import  Autosuggest from 'react-autosuggest';

    function escapeRegexCharacters(str) {
        return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }
  
    function getSuggestions(value) {
        const escapedValue = escapeRegexCharacters(value.trim());
        
        if (escapedValue === '') {
        return [];
        }
    
        const regex = new RegExp('^' + escapedValue, 'i');
    
        return languages.map(section => {
            return {
              title: section.title,
              languages: section.languages.filter(language => regex.test(language.name))
            };
          }).filter(section => section.languages.length > 0);
    }
    
    function getSuggestionValue(suggestion) {
        return suggestion.name;
    }
    
    function renderSuggestion(suggestion) {
        return (
        <span>{suggestion.name}</span>
        );
    }
    function getSectionSuggestions(section) {
        return section.languages;
      }
    function renderSectionTitle(section) {
        return (
          <strong>{section.title}</strong>
        );
      }

class NavigationBar extends Component{
    constructor(){
        super();
        this.state={
            value: '',
            suggestions: []
        }
    }
    onChange = (event, { newValue, method })=>{
        this.setState({
            value: newValue
        });
    };
    onSuggestionsClearRequested=()=>{
        this.setState({
            suggestions:[]
        })
    }
    onSuggestionsFetchRequested=({value})=>{
        this.setState({
            suggestions:getSuggestions(value)
        })
    }
    render(){
        const { value,suggestions } = this.state;
        const inputProps = {
            placeholder: 'Search desired language',
            value,
            onChange:this.onChange
        }
        return(
            <Container fluid className="bg-grey">
               <Row>
                   <Col md="4">
                        <nav className="nav">
                            <a className="nav-link active" href="#">Home</a>
                            <a className="nav-link" href="#">Reports</a>
                            <a className="nav-link" href="#">About us</a>
                            <a className="nav-link" href="#">Contact us</a>
                            {/* <a className="nav-link disabled" href="#">Disabled</a> */}
                        </nav>
                   </Col>
                   <Col md="6">
                        <Autosuggest 
                        multiSection={true}
                        suggestions = {suggestions}
                        onSuggestionsFetchRequested = {this.onSuggestionsFetchRequested}
                        onSuggestionsClearRequested = {this.onSuggestionsClearRequested}
                        getSuggestionValue = {getSuggestionValue}
                        renderSuggestion = {renderSuggestion}
                        renderSectionTitle={renderSectionTitle}
                        getSectionSuggestions={getSectionSuggestions}
                        inputProps = {inputProps}
                        />

                   </Col>
                   <Col md="2" className="settings-section">
                   <span><i class="fas fa-cog"></i></span>
                 </Col>
               </Row>
            </Container>
        )
    }
}
export default NavigationBar;