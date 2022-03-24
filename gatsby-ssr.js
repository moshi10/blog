exports.onPreRenderHTML = function onPreRenderHTML({
    getHeadComponents,
    replaceHeadComponents,
  }) {

    console.log("ﾐｸﾀﾞﾖ");

    const headComponents = getHeadComponents();

    headComponents.sort((a, b) => {
      if (a.type === b.type || (a.type !== 'link' && b.type !== 'link')) {
        return 0;
      }
  
      if (a.type === 'link') {
        return 1;
      } else if (b.type === 'link') {
        return -1;
      }
  
      return 0;
    });

    console.log(headComponents);
  
    replaceHeadComponents(headComponents);
  };
