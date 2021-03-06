import React from 'react';
import styled from 'styled-components';

import RepoCard from './RepoCard';
import FilterComponent from './FilterComponent';
import { FlexContainer } from './elements/Flex';

const Wrapper = styled.div`
    padding: 0 2rem;
    background-color: #EEEEEE;
    margin-top: -75px;
    @media(max-width:500px){
        margin-top: 0;
    }
`;

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(12,1fr);
    grid-gap: 1.5rem;
`;

class RepoList extends React.Component{

    state = {
        repos: this.props.repos
    }

    onChangeFilter = filter => {
        switch(filter){
            case 'stars':
                this.setState({ repos: this.state.repos.sort( (a,b) => b.stargazers_count - a.stargazers_count ) });                
                break;
             case 'repos':
                this.setState({ repos: this.state.repos.sort( (a,b) => b.size - a.size ) });
                break;
            default: break;
        }
    }

    render(){
        let reposJsx = this.state.repos.map(repo => <RepoCard key={repo.id} repo={repo} /> );
        return (
            <Wrapper>
                <FlexContainer>
                    <h1>Repositórios</h1>
                    <FilterComponent onChangeFilter={this.onChangeFilter} />
                </FlexContainer>
                <GridContainer>
                    {reposJsx}
                </GridContainer>
            </Wrapper>
        );
    }
}

export default RepoList;