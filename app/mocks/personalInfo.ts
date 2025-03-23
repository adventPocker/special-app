import { PersonalApiResponse } from '../types';

export const mockPersonalData: PersonalApiResponse = {
  data: {
    id: 1,
    attributes: {
      Name: "John Smith",
      Biography: "John Smith is an acclaimed filmmaker with over 20 years of experience in the industry. Known for his innovative storytelling and visual style, he has directed numerous award-winning films that have captivated audiences worldwide.",
      createdAt: "2024-01-01T00:00:00.000Z",
      updatedAt: "2024-01-01T00:00:00.000Z",
      publishedAt: "2024-01-01T00:00:00.000Z",
      Image: {
        data: {
          id: 1,
          attributes: {
            name: "profile-banner",
            url: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
          }
        }
      },
      ProfileImg: {
        data: {
          id: 2,
          attributes: {
            name: "profile-image",
            url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
          }
        }
      },
      Director: [
        {
          id: 1,
          Tilte: "The Last Journey",
          Year: "2024",
          Rating: "8.5",
          Image: {
            data: {
              id: 3,
              attributes: {
                name: "movie-1",
                url: "https://images.unsplash.com/photo-1485846234645-a62644f84728",
              }
            }
          }
        },
        {
          id: 2,
          Tilte: "Ocean's Whisper",
          Year: "2024",
          Rating: "9.0",
          Image: {
            data: {
              id: 4,
              attributes: {
                name: "movie-2",
                url: "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d",
              }
            }
          }
        }
      ],
      Actor: [
        {
          id: 1,
          Tilte: "City Lights",
          Year: "2023",
          Rating: "8.0",
          Image: {
            data: {
              id: 5,
              attributes: {
                name: "movie-3",
                url: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae",
              }
            }
          }
        }
      ],
      Producer: [
        {
          id: 1,
          Tilte: "Mountain Dreams",
          Year: "2023",
          Rating: "8.8",
          Image: {
            data: {
              id: 6,
              attributes: {
                name: "movie-4",
                url: "https://images.unsplash.com/photo-1533929736458-ca588d08c8be",
              }
            }
          }
        }
      ],
      Awards: [
        {
          id: 1,
          Film_Title: "The Last Journey",
          Year: "2024",
          Details: [
            {
              id: 1,
              AwardRecipient: "John Smith",
              AwardTitle: "Best Director"
            }
          ]
        },
        {
          id: 2,
          Film_Title: "Ocean's Whisper",
          Year: "2024",
          Details: [
            {
              id: 2,
              AwardRecipient: "John Smith",
              AwardTitle: "Best Picture"
            }
          ]
        }
      ]
    }
  },
  meta: {
    pagination: {
      page: 1,
      pageSize: 25,
      pageCount: 1,
      total: 1
    }
  }
}; 