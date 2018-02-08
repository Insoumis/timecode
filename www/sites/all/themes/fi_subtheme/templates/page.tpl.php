<header class="banner">
  <nav class="nav-primary navbar navbar-default navbar-static-top">
    <div class="container">
      <div class="navbar-header">
        
		<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#main-navbar-collapse" aria-expanded="false">
          Menu <span class="caret"></span>
        </button>
		
		
		<?php if ($logo): ?>
			<a class="logo navbar-btn pull-left" href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>">
			  <!-- <img src="<?php //print $logo; ?>" alt="<?php //print t('Home'); ?>" /> -->
			</a>
		<?php endif; ?>

		</div>
		
		
<!-- Menu à côte du logo -->
		<div class="collapse navbar-collapse" id="main-navbar-collapse">
			
		  <?php if (!empty($secondary_nav)): ?>
			<?php print render($secondary_nav); ?>
		<?php endif; ?>
		
		</div>
    </div>
  </nav>
  
  <!-- la barre de menu -->
  
  <nav class="navbar navbar-secondary">
    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#supporter-nav-collapse">
          <span class="sr-only">Activer la navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
      </div>
		<div id="supporter-nav-collapse" class="collapse navbar-collapse">
			
		
          <?php if (!empty($primary_nav)): ?>
            <?php print render($primary_nav); ?>
          <?php endif; ?>

          <?php if (!empty($page['navigation'])): ?>
            <?php print render($page['navigation']); ?>
          <?php endif; ?>
	  
		</div>
    </div>
  </nav>
</header>

<?php if(drupal_is_front_page()) : ?>
<section class="section-home-one">
  <div class="container">
    <?php 
      $block = module_invoke('block', 'block_view', '2');
      print render($block['content']);
    ?>
  </div>
</section>
<?php endif; ?>

<div class="main-container <?php print $container_class; ?>">

  <header role="banner" id="page-header">
	<!-- Pour l'instant désactivé
	<?php if ($logo): ?>
		<a class="logo navbar-btn pull-left" href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>">
			  <img src="<?php print $logo; ?>" alt="<?php print t('Home'); ?>" />
		</a>
	<?php endif; ?>

	<?php if (!empty($site_name)): ?>
	<a class="name navbar-brand" href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>"><?php print $site_name; ?></a>
	<?php endif; ?>    
	<?php if (!empty($site_slogan)): ?>
      <p class="lead"><?php print $site_slogan; ?></p>
    <?php endif; ?>
	-->
    <?php print render($page['header']); ?>
  </header> <!-- /#page-header -->
	
  <div class="row">

    <div class="container">

    <?php if (!empty($page['sidebar_first'])): ?>
      <aside class="col-md-3" role="complementary">
        <?php print render($page['sidebar_first']); ?>
      </aside>  <!-- /#sidebar-first -->
    <?php endif; ?>

    <section<?php print $content_column_class; ?>>
      <?php if (!empty($page['highlighted'])): ?>
        <div class="highlighted jumbotron"><?php print render($page['highlighted']); ?></div>
      <?php endif; ?>
      <?php if (!empty($breadcrumb)): print $breadcrumb; endif;?>
      <a id="main-content"></a>
      <?php print render($title_prefix); ?>
      <?php if (!empty($title) && (!drupal_is_front_page())): ?>
        <h1 class="page-header"><?php print $title; ?></h1>
      <?php endif; ?>
      <?php print render($title_suffix); ?>
      <?php print $messages; ?>
      <?php if (!empty($tabs)): ?>
        <?php print render($tabs); ?>
      <?php endif; ?>
      <?php if (!empty($page['help'])): ?>
        <?php print render($page['help']); ?>
      <?php endif; ?>
      <?php if (!empty($action_links)): ?>
        <ul class="action-links"><?php print render($action_links); ?></ul>
      <?php endif; ?>
      <?php print render($page['content']); ?>
    </section>

    <?php if (!empty($page['sidebar_second'])): ?>
      <aside class="col-md-3" role="complementary">
        <?php print render($page['sidebar_second']); ?>
      </aside>  <!-- /#sidebar-second -->
    <?php endif; ?>

  </div><!-- end of the container -->

  </div> <!-- end of the row -->
</div> <!-- end of the main container -->

	
<footer>
	<div class="footer-container <?php print $container_class; ?>">

		<div class="row">

			  <?php if (!empty($page['footer'])): ?>
					<div class="col-md-4 <?php print $container_class; ?>">
						<?php print render($page['footer']); ?>
            <div class="contact-footer"><a href="/contact" role="button">Contact</a></div>
					</div>
				<?php endif; ?>

				<?php if (!empty($page['footer2'])): ?>
					<div class="col-md-4 <?php print $container_class; ?>">
						<?php print render($page['footer2']); ?>
					</div>
				<?php endif; ?>
				
				<?php if (!empty($page['footer3'])): ?>
					<div class="col-md-4 <?php print $container_class; ?>">
						<?php print render($page['footer3']); ?>
					</div>
        <?php endif; ?>

		</div><!-- /.row 2 -->

	</div> <!-- end of the footer container -->
</footer>
		