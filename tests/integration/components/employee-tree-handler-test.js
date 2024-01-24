import { module, test } from 'qunit';
import { setupRenderingTest } from 'employee-organization-chart/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | employee-tree-handler', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<EmployeeTreeHandler />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <EmployeeTreeHandler>
        template block text
      </EmployeeTreeHandler>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
