## Welcome Component Developer

This is the starting project template for a standalone Origami v2 component.

## Public or Private?

Your first decision: Are you building an open source or closed source component? By default, Origami components are open
unless it was decided with input from the Pearson Design Accelerator team that it should be closed.

If you are building open source, the repo belongs in the Pearson GitHub organization. Send a request to 
pearson-design-accelerator@pearson.com to be invited to github.com/Pearson-Higher-Ed. You must accept the request to join.

If you are building closed source, the repo belongs in Pearson BitBucket, for which you should already have an account.

## Getting Started

1. Create your new repository in GitHub (open source - default) or Pearson BitBucket (private source).

2. Follow these [directions](https://help.github.com/articles/caching-your-github-password-in-git/#platform-all) to stop
 manually authenticating to GitHub on every network request. This enables the use of automated npm scripts.

3. Perform these steps in your development environment:  
	1. git clone https://github.com/Pearson-Higher-Ed/component-archetype.git **[name_of_your_new_component]**  
	2. cd **[name_of_your_new_component]**  
    3. git remote set-url origin **[url_of_new_component_repository]**  
    4. git remote -v  
  
4. Once you've verified that the remote origin now looks correct for your repo, do the initial push:

    git push -u origin master

## Ready to Develop

After completing the above steps, discard this README and rename [README.main.md](README.main.md) as "README.md" for 
your project. You are ready to begin developing your component!
