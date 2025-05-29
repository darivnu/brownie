export interface RouteConfig {
  /**
   * Route mapping configuration object.
   */
  routes: Record<string, string>;
  /**
   * Cron schedule configuration object.
   */
  schedule: string | Deno.CronSchedule;
}

/**
 * The convention is to use brownie ingredients as paths.
 */
export const config: RouteConfig = {
  routes: {
    cocoa:
      "https://github-stats-rust-one.vercel.app/api?username=darivnu&theme=omni&hide_border=false&include_all_commits=true&count_private=true&show_icons=true",
    vanilla:
      "https://github-readme-streak-stats.herokuapp.com/?user=darivnu&theme=omni&hide_border=false",
  },
  schedule: "*/20 * * * *",
};
