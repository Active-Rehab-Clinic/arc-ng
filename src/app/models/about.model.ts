import { TeamMember } from '@models/team.model';

export interface AboutInfo {
  mission: string;
  vision: string;
  values: string[];
  team: TeamMember[];
}