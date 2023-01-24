import { RepositoryListContainer } from '../../components/RepositoryList';
import { screen, render, within } from '@testing-library/react-native';
import React from 'react';


describe('RepositoryList', () => {
  
    describe('RepositoryListContainer', () => {
      it('renders repository information correctly', () => {
        const repositories = {
          totalCount: 8,
          pageInfo: {
            hasNextPage: true,
            endCursor:
              'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
            startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
          },
          edges: [
            {
              node: {
                id: 'jaredpalmer.formik',
                fullName: 'jaredpalmer/formik',
                description: 'Build forms in React, without the tears',
                language: 'TypeScript',
                forksCount: 1619,
                stargazersCount: 21856,
                ratingAverage: 88,
                reviewCount: 3,
                ownerAvatarUrl:
                  'https://avatars2.githubusercontent.com/u/4060187?v=4',
              },
              cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
            },
            {
              node: {
                id: 'async-library.react-async',
                fullName: 'async-library/react-async',
                description: 'Flexible promise-based React data loader',
                language: 'JavaScript',
                forksCount: 69,
                stargazersCount: 1760,
                ratingAverage: 72,
                reviewCount: 3,
                ownerAvatarUrl:
                  'https://avatars1.githubusercontent.com/u/54310907?v=4',
              },
              cursor:
                'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
            },
          ],
        };
        
        render(<RepositoryListContainer repositories={repositories} />);
        const repositoryItems = screen.getAllByTestId('repositoryItem');
        const [firstRepoItem, secondRepoItem] = repositoryItems;
        
        /*const fullName = within(firstRepoItem).getByTestId('fullName');
        const stargazersCount = within(firstRepoItem).getByTestId('stargazers');*/
        
        
        expect(within(firstRepoItem).getByTestId('fullName')).toHaveTextContent('jaredpalmer/formik');
        expect(within(firstRepoItem).getByTestId('description')).toHaveTextContent('Build forms in React, without the tears');
        expect(within(firstRepoItem).getByTestId('language')).toHaveTextContent('TypeScript');
        expect(within(firstRepoItem).getByTestId('forks')).toHaveTextContent('1.62k');
        expect(within(firstRepoItem).getByTestId('stargazers')).toHaveTextContent('21.9k');
        expect(within(firstRepoItem).getByTestId('rating')).toHaveTextContent('88');
        expect(within(firstRepoItem).getByTestId('reviews')).toHaveTextContent('3');

        expect(within(secondRepoItem).getByTestId('fullName')).toHaveTextContent('async-library/react-async');
        expect(within(secondRepoItem).getByTestId('description')).toHaveTextContent('Flexible promise-based React data loader');
        expect(within(secondRepoItem).getByTestId('language')).toHaveTextContent('JavaScript');
        expect(within(secondRepoItem).getByTestId('forks')).toHaveTextContent('69');
        expect(within(secondRepoItem).getByTestId('stargazers')).toHaveTextContent('1.76k');
        expect(within(secondRepoItem).getByTestId('rating')).toHaveTextContent('72');
        expect(within(secondRepoItem).getByTestId('reviews')).toHaveTextContent('3');
      });
    });
  });
