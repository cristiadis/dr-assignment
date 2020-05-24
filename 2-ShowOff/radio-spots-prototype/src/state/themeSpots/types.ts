// These would still need some missing properties, and also some should be optional, but I didn't manage to check which ones yet.
// Some types can also be made more specific, so instead of string, for example, we have "Series" | "Podcast" etc.

export interface Spot {
  Type: string,
  Urn: string,
  Slug: string,
  ProductionNumber: string,
  PresentationUri: string,
  Title: string,
  Description: string,
  NumberOfItems: number,
  PrimaryChannelSlug: string,
  PrimaryImageUri: string,
  SquareImageUri: string,
  PodcastImageUri: string,
  PodcastFeedUri: string,
  PresentationType: string,
  OnlineGenreText: string,
  DurationInMilliseconds: number,
  ParentTitle: string,
  ParentUrn: string,
  ParentSlug: string,
  StartTime: string,
  OcsUrn: string,
  HasTitle: boolean
}

export interface Theme {
  Type: 'Theme',
  Slug: string,
  Urn: string,
  Title: string,
  Description: string,
  PrimaryImageUri: string,
  DisplayType: string,
  IsFeatured: boolean,
  Items: Array<Spot>
}