import {request, gql} from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT;

export const getPosts = async () => {
    const query = gql`
    query MyQuery {
        assets {
          createdAt
          id
          publishedAt
          fileName
          url
          updatedAt
        }
        postsConnection(
          orderBy: createdAt_DESC
          last: 10) {
          edges {
            node {
              author {
                bio
                name
                id
                photo {
                  url
                }
              }
              createdAt
              slug
              title
              excerpt
              featuredImage {
                url
              }
              categories {
                name
                slug
              }
            }
          }
        }
      }
      
           
    `

    const results = await request(graphqlAPI, query)
    return results.postsConnection.edges
}

export const getPostDetails = async (slug) => {
  const query = gql`
    query GetPostDetails($slug : String!) {
      post(where: {slug: $slug}) {
        title
        excerpt
        featuredImage {
          url
        }
        author{
          name
          bio
          photo {
            url
          }
        }
        createdAt
        slug
        content {
          raw
        }
        categories {
          name
          slug
        }
      }
    }
  `;

  const results = await request(graphqlAPI, query, {slug})
  return results.post
}

export const getRecentPosts = async () => {
    const query = gql`
        query GetPostDetails(){
            posts(
                orderBy: createdAt_DESC
                last:3
            ){
                title
                featuredImage{
                    url
                }
                createdAt
                slug
            }
        }
    `
    const results = await request(graphqlAPI, query)
    return results.posts
}

export const getSimilarPosts = async (categories,slug) => {
    const query = gql`
        query GetPostDetails($slug: String!, $categories:[String!]){
            posts(
                where:{slug_not:$slug, AND:{ categories_some:{slug_in:$categories}}}
                last:3
            ){
                title
                featuredImage{
                    url
                }
                createdAt
                slug
            }
        }
    `
    const results = await request(graphqlAPI, query, {slug, categories})
    return results.posts
}

export const getCategories = async () => {
    const query=gql`
     query GetCategories{
        categories {
            name
            slug
        }
    }
    `
    const results = await request(graphqlAPI, query)
    return results.categories
}

export const submitComment = async (obj) => {
  const result = await fetch('/api/Comments', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj),
  });

  return result.json();
};

export const getComments = async (slug) => {
  const query=gql`
   query GetComments($slug: String!){
      comments(where:{post:{slug:$slug}}) {
          name
          createdAt
          comment
      }
  }
  `
  const results = await request(graphqlAPI, query, {slug})
  return results.comments
}

export const getAdjacentPosts = async (createdAt, slug) => {
  const query = gql`
    query GetAdjacentPosts($createdAt: DateTime!,$slug:String!) {
      next:posts(
        first: 1
        orderBy: createdAt_ASC
        where: {slug_not: $slug, AND: {createdAt_gte: $createdAt}}
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
      previous:posts(
        first: 1
        orderBy: createdAt_DESC
        where: {slug_not: $slug, AND: {createdAt_lte: $createdAt}}
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug, createdAt });

  return { next: result.next[0], previous: result.previous[0] };
};

export const getCategoryPost = async (slug) => {
  const query = gql`
    query GetCategoryPost($slug: String!) {
      postsConnection(where: {categories_some: {slug: $slug}}) {
        edges {
          cursor
          node {
            author {
              bio
              name
              id
              photo {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });

  return result.postsConnection.edges;
};

export const getFeaturedPosts = async () => {
  const query = gql`
    query GetCategoryPost() {
      posts(where: {featuredPost: true}) {
        author {
          name
          photo {
            url
          }
        }
        featuredImage {
          url
        }
        title
        slug
        createdAt
      }
    }   
  `;

  const result = await request(graphqlAPI, query);

  return result.posts;
};

export const getheroPosts = async () => {
  const query = gql`
    query GetCategoryPost() {
      posts(where: {postOfTheDay: true}) {
        author {
          name
          photo {
            url
          }
        }
        featuredImage {
          url
        }
        title
        slug
        createdAt
      }
    }   
  `;

  const result = await request(graphqlAPI, query);

  return result.posts;
};
