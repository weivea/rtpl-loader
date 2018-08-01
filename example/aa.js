import * as plugin from './plugin';
function render( opt ) {var data = opt.data; return

  `  <div>
      <span>${data.a}</span><span>${data.b}</span>
      <div>${plugin.add(1,2)}</div>
      ${
        subrtpl.render({
          data
        })
      }
    </div>`}; export {render}