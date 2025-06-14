# Navigating through Git  
https://youtu.be/WdyUkg4RCt4

# Misconception i had
thought we have to do git add and git commit everytime. turns out you have to do only commit.
add is used only when you create new files.  

basically add just adds the files into the watchlist of git, now git will keep on watching those files.
when you commit, git will save them.  
so, basically if you didn't create any new files and just made some code change you can just commit and push.  
more technically changes from untracked to stage.  

# properly understand the iamge 1 
it says exactly what happens
untracked, unmodified, modified, staged.

# git status
Shows current BRANCH  
latest commits  
lists the untracked files etc...  
basically shows more details depending on the situation. ( I wasn't using this as often as i should)

#  git log
shows a log of commits  
>> git log
>> git log -p -5  
shows the last 5 commits


# rolling back commits
>> git reset commitID
get commit ID from git log

